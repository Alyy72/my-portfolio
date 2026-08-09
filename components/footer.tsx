"use client";

import { FormEvent, useState } from "react";
import { Code2, Link2, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio note from ${name || "someone"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <footer id="contact" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            04 — Contact
          </p>
          <h2 className="max-w-md text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let’s talk coffee, code, or both.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-base">
            Dubai-based. Always building. Drop a note — whether it’s about a pour,
            a pipeline, or a project that needs grit.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Code2 className="size-4" />
              GitHub
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Link2 className="size-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="size-4" />
              Email
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-lg border border-border bg-surface p-5 sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-muted">Name</span>
              <Input name="name" placeholder="Your name" required />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-muted">Email</span>
              <Input
                name="email"
                type="email"
                placeholder="you@domain.com"
                required
              />
            </label>
          </div>
          <label className="block space-y-2 text-sm">
            <span className="text-muted">Message</span>
            <Textarea
              name="message"
              placeholder="What’s on your mind?"
              required
            />
          </label>
          <div className="flex items-center justify-between gap-3 pt-1">
            <p className="font-mono text-[11px] text-muted">
              {status === "sent"
                ? "Opening your mail client…"
                : "Opens your email client — no backend yet."}
            </p>
            <Button type="submit">
              Send
              <Send className="size-3.5" />
            </Button>
          </div>
        </form>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p className="font-mono text-xs text-muted">
          Built with Cursor · Deployed with grit
        </p>
      </div>
    </footer>
  );
}
