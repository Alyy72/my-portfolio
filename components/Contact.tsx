"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { QuickLinks } from "@/components/SocialIconBar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!turnstileSiteKey) return;
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  async function onContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const token = String(data.get("cf-turnstile-response") || "");

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message, token }),
      });
      const payload = (await res.json()) as {
        ok?: boolean;
        error?: string;
        fallback?: string;
      };
      if (res.ok && payload.ok) {
        setStatus("sent");
        form.reset();
        toast.success("Message sent.");
        return;
      }
      if (payload.fallback) {
        openMailto(name, email, message);
        setStatus("idle");
        return;
      }
      setStatus("error");
      setError(payload.error || "Could not send. Try email or WhatsApp.");
    } catch {
      openMailto(name, email, message);
      setStatus("idle");
    }
  }

  function openMailto(name: string, email: string, message: string) {
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  }

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Start a project.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={onContactSubmit}
              className="glass space-y-4 rounded-3xl p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                Contact Me
              </h3>
              <p className="text-sm text-muted">
                The form posts to a Cloudflare Worker. If email sending is not
                configured, it opens your mail client to {siteConfig.email}.
              </p>
              <label className="block space-y-2 text-sm">
                <span className="text-muted">Name</span>
                <Input
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="border-black/10 bg-white/60"
                />
              </label>
              <label className="block space-y-2 text-sm">
                <span className="text-muted">Email</span>
                <Input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@domain.com"
                  className="border-black/10 bg-white/60"
                />
              </label>
              <label className="block space-y-2 text-sm">
                <span className="text-muted">Message</span>
                <Textarea
                  name="message"
                  required
                  placeholder="Tell me about your project…"
                  className="border-black/10 bg-white/60"
                />
              </label>
              {turnstileSiteKey ? (
                <div
                  ref={widgetRef}
                  className="cf-turnstile"
                  data-sitekey={turnstileSiteKey}
                />
              ) : (
                <p className="text-xs text-muted">
                  Turnstile is ready on the Worker once a site key is set.
                </p>
              )}
              {error ? (
                <p className="text-sm text-red-700" role="alert">
                  {error}
                </p>
              ) : null}
              {status === "sent" ? (
                <p className="text-sm text-[#004741]" role="status">
                  Thanks — I’ll reply from {siteConfig.email}.
                </p>
              ) : null}
              <Button
                type="submit"
                disabled={status === "sending"}
                className="h-11 rounded-full bg-neutral-900 px-5 text-white hover:bg-neutral-700"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
                <Send className="size-3.5" />
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass space-y-4 rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                Book a 20-minute intro
              </h3>
              <p className="text-sm text-muted">
                WhatsApp is the booking path. No Cal.com account is connected.
              </p>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center rounded-full bg-[#004741] px-5 text-sm font-semibold text-[#F0EDE4]"
              >
                WhatsApp {siteConfig.whatsappDisplay}
              </a>
              <QuickLinks showTitle={false} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
