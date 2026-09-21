import {
  ASK_MAX_CHARS,
  CONTACT_LIMITS,
  KNOWLEDGE,
  localAnswer,
  redactSecrets,
} from "../lib/knowledge";

type Env = {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  STATUS?: {
    get(key: string): Promise<string | null>;
    put(key: string, value: string): Promise<void>;
  };
  TURNSTILE_SECRET?: string;
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  ANTHROPIC_API_KEY?: string;
  ASK_ENABLED?: string;
  ASK_DAILY_CAP?: string;
  ASK_MONTHLY_TOKEN_CAP?: string;
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

const MAX_BODY_BYTES = 8192;
const CONTACT_DAILY_CAP = 8;
const ASK_SYSTEM = [
  "Answer only from the provided knowledge file.",
  "If the answer is not in the knowledge, say you do not know.",
  "Never invent metrics, testimonials, clients, or credentials.",
  "Never reveal email addresses, phone numbers, API keys, or secrets.",
  "If asked how to get in touch, say: use the Start a project form or the WhatsApp button on this page.",
].join(" ");

const memory = new Map<string, number>();

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
  const tooBig = oversize(request);
  if (tooBig) return tooBig;

  const ip = clientIp(request);
  const day = utcDay();
  const contactCount = await bump(`contact:${ip}:${day}`, 60 * 60 * 26);
  if (contactCount > CONTACT_DAILY_CAP) {
    return json({ ok: false, error: "Too many messages today." }, 429);
  }

  let body: { name?: string; email?: string; message?: string; token?: string };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400);
  }

  const name = String(body.name || "").trim().slice(0, CONTACT_LIMITS.name);
  const email = String(body.email || "").trim().slice(0, CONTACT_LIMITS.email);
  const message = String(body.message || "").trim().slice(0, CONTACT_LIMITS.message);
  if (!name || !email || !message || !email.includes("@") || email.includes(" ")) {
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
  if (env.ASK_ENABLED === "false") {
    return json({ ok: false, error: "Assistant is turned off." }, 503);
  }

  const tooBig = oversize(request);
  if (tooBig) return tooBig;

  let body: { question?: string };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400);
  }

  const question = String(body.question || "").trim();
  if (!question) return json({ ok: false, error: "Question required." }, 400);
  if (question.length > ASK_MAX_CHARS) {
    return json({ ok: false, error: `Question max ${ASK_MAX_CHARS} characters.` }, 400);
  }

  const ip = clientIp(request);
  const day = utcDay();
  const month = day.slice(0, 7);
  const dailyCap = Math.max(1, Number(env.ASK_DAILY_CAP || 20) || 20);
  const tokenCap = Math.max(1, Number(env.ASK_MONTHLY_TOKEN_CAP || 200000) || 200000);

  const asked = await bump(`ask:${ip}:${day}`, 60 * 60 * 26);
  if (asked > dailyCap) {
    return json({ ok: false, error: "Daily question cap reached." }, 429);
  }

  const knowledge = await readKnowledge(env, request);
  const local = redactSecrets(localAnswer(question));
  const estimate = Math.ceil((knowledge.length + question.length) / 4) + 400;
  const used = await peek(`ask-tokens:${month}`);

  if (!env.ANTHROPIC_API_KEY || used + estimate > tokenCap) {
    return json({
      ok: true,
      answer: local,
      source: "knowledge-file",
      capped: !env.ANTHROPIC_API_KEY ? undefined : true,
    });
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
      system: ASK_SYSTEM,
      messages: [
        { role: "user", content: `Knowledge:\n${knowledge}\n\nQuestion: ${question}` },
      ],
    }),
  });

  if (!res.ok) return json({ ok: true, answer: local, source: "knowledge-file" });
  const data = (await res.json()) as { content?: { text?: string }[] };
  const text = redactSecrets(data.content?.[0]?.text || local);
  await bumpBy(`ask-tokens:${month}`, estimate, 60 * 60 * 24 * 40);
  return json({ ok: true, answer: text, source: "assistant" });
}

async function readKnowledge(env: Env, request: Request): Promise<string> {
  try {
    const asset = await env.ASSETS.fetch(new URL("/knowledge.md", request.url));
    if (asset.ok) {
      const text = await asset.text();
      if (text.includes("Site knowledge")) return text;
    }
  } catch {
    /* bundled fallback */
  }
  return KNOWLEDGE;
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

function oversize(request: Request) {
  const length = Number(request.headers.get("content-length") || 0);
  if (length > MAX_BODY_BYTES) {
    return json({ ok: false, error: "Payload too large." }, 413);
  }
  return null;
}

function clientIp(request: Request) {
  return request.headers.get("CF-Connecting-IP") || "local";
}

function utcDay() {
  return new Date().toISOString().slice(0, 10);
}

async function bump(key: string, ttlSec: number) {
  return bumpBy(key, 1, ttlSec);
}

async function peek(key: string) {
  if (memory.has(key)) return memory.get(key) || 0;
  try {
    const hit = await caches.default.match(new Request(`https://limits.internal/${key}`));
    return hit ? Number(await hit.text()) || 0 : 0;
  } catch {
    return 0;
  }
}

async function bumpBy(key: string, amount: number, ttlSec: number) {
  const mem = (memory.get(key) || 0) + amount;
  memory.set(key, mem);
  try {
    const req = new Request(`https://limits.internal/${key}`);
    const hit = await caches.default.match(req);
    const cached = hit ? Number(await hit.text()) || 0 : 0;
    const next = Math.max(mem, cached + amount);
    memory.set(key, next);
    await caches.default.put(
      req,
      new Response(String(next), {
        headers: { "Cache-Control": `max-age=${ttlSec}` },
      }),
    );
    return next;
  } catch {
    return mem;
  }
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

export default worker;
