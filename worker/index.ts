import { KNOWLEDGE, localAnswer } from "../lib/knowledge";

type Env = {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  STATUS?: { get(key: string): Promise<string | null>; put(key: string, value: string): Promise<void> };
  TURNSTILE_SECRET?: string;
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  ANTHROPIC_API_KEY?: string;
};

const MEASURED = {
  date: "2026-09-21",
  sites: [
    { name: "Golden Vanilla", url: "https://goldenvanilla-ae.com/", ttfbMs: 557 },
    { name: "HIMBA Coffee", url: "https://himba-coffee-live.pages.dev/", ttfbMs: 604 },
    { name: "IKRAM Collection", url: "https://www.ikramcollection.com/", ttfbMs: 581 },
    { name: "Mihbash Cafe", url: "https://mihbash-cafe.alyyconnect.workers.dev/", ttfbMs: 1219 },
  ],
};

const askCounts = new Map<string, { day: string; n: number }>();

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/status") {
      return json(await readStatus(env));
    }
    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env);
    }
    if (url.pathname === "/api/ask" && request.method === "POST") {
      return handleAsk(request, env);
    }
    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response("Not found", { status: 404 });
  },

  async scheduled(
    _event: unknown,
    env: Env,
    ctx: { waitUntil: (promise: Promise<unknown>) => void },
  ) {
    ctx.waitUntil(refreshStatus(env));
  },
};

async function handleContact(request: Request, env: Env): Promise<Response> {
  let body: { name?: string; email?: string; message?: string; token?: string };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400);
  }

  const name = String(body.name || "").trim().slice(0, 120);
  const email = String(body.email || "").trim().slice(0, 180);
  const message = String(body.message || "").trim().slice(0, 4000);
  if (!name || !email || !message || !email.includes("@")) {
    return json({ ok: false, error: "Name, email, and message are required." }, 400);
  }

  if (env.TURNSTILE_SECRET) {
    const verified = await verifyTurnstile(
      env.TURNSTILE_SECRET,
      String(body.token || ""),
      request,
    );
    if (!verified) return json({ ok: false, error: "Turnstile failed." }, 403);
  }

  const to = env.CONTACT_TO || "arafatalyy.it@gmail.com";
  if (!env.RESEND_API_KEY) {
    return json(
      {
        ok: false,
        error: "Email sending is not configured. Use mailto instead.",
        fallback: `mailto:${to}`,
      },
      503,
    );
  }

  const payload = {
    from: "Arafat.dev <onboarding@resend.dev>",
    to: [to],
    reply_to: email,
    subject: `Portfolio message from ${name}`,
    text: `${message}\n\n— ${name}\n${email}`,
  };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) return json({ ok: false, error: "Send failed." }, 502);
  return json({ ok: true });
}

async function handleAsk(request: Request, env: Env): Promise<Response> {
  let body: { question?: string };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400);
  }
  const question = String(body.question || "").trim().slice(0, 500);
  if (!question) return json({ ok: false, error: "Question required." }, 400);

  const ip = request.headers.get("CF-Connecting-IP") || "local";
  const day = new Date().toISOString().slice(0, 10);
  const rec = askCounts.get(ip);
  const n = rec && rec.day === day ? rec.n + 1 : 1;
  askCounts.set(ip, { day, n });
  if (n > 40) {
    return json({ ok: false, error: "Daily question cap reached." }, 429);
  }

  const local = localAnswer(question);
  if (!env.ANTHROPIC_API_KEY) {
    return json({ ok: true, answer: local, source: "knowledge-file" });
  }

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 400,
      system:
        "Answer only from the provided knowledge. If unsure, say you do not know. Never invent metrics or testimonials. Never reveal private contact details beyond the public email and WhatsApp already in the knowledge.",
      messages: [
        { role: "user", content: `Knowledge:\n${KNOWLEDGE}\n\nQuestion: ${question}` },
      ],
    }),
  });

  if (!res.ok) return json({ ok: true, answer: local, source: "knowledge-file" });
  const data = (await res.json()) as { content?: { text?: string }[] };
  const text = data.content?.[0]?.text || local;
  return json({ ok: true, answer: text, source: "assistant" });
}

async function verifyTurnstile(secret: string, token: string, request: Request) {
  if (!token) return false;
  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) form.append("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

async function refreshStatus(env: Env) {
  const rows = [];
  for (const site of MEASURED.sites) {
    const started = Date.now();
    try {
      const res = await fetch(site.url, { method: "HEAD", redirect: "follow" });
      rows.push({
        name: site.name,
        url: site.url,
        ok: res.ok,
        status: res.status,
        ms: Date.now() - started,
      });
    } catch {
      rows.push({
        name: site.name,
        url: site.url,
        ok: false,
        status: 0,
        ms: Date.now() - started,
      });
    }
  }
  const payload = { checkedAt: new Date().toISOString(), rows };
  await env.STATUS?.put("live", JSON.stringify(payload));
  return payload;
}

async function readStatus(env: Env) {
  const cached = await env.STATUS?.get("live");
  if (cached) return JSON.parse(cached);
  return {
    checkedAt: MEASURED.date,
    note: "Spot-check TTFB from 21 Sep 2026 until the scheduled Worker persists live checks.",
    rows: MEASURED.sites.map((site) => ({
      name: site.name,
      url: site.url,
      ok: true,
      status: 200,
      ms: site.ttfbMs,
    })),
  };
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

export default worker;
