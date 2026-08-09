"use client";

import { FormEvent, useState } from "react";
import {
  BadgeCheck,
  Code2,
  Coffee,
  Headset,
  Link2,
  Mail,
  PenTool,
  Send,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSkills, siteConfig } from "@/lib/site-data";

const skillIcons: Record<(typeof contactSkills)[number]["icon"], LucideIcon> = {
  Coffee,
  Terminal,
  Headset,
  PenTool,
};

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
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let’s talk coffee, code, or IT infrastructure.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Whether you need a flawlessly extracted{" "}
            <span className="inline-flex items-center gap-1 text-foreground">
              <Coffee className="size-3.5 text-physical-warm" aria-hidden />
              V60
            </span>
            , an autonomous{" "}
            <span className="inline-flex items-center gap-1 text-foreground">
              <Terminal className="size-3.5 text-accent" aria-hidden />
              Next.js
            </span>{" "}
            web app, elite{" "}
            <span className="inline-flex items-center gap-1 text-foreground">
              <Headset className="size-3.5 text-accent" aria-hidden />
              IT Help Desk
            </span>{" "}
            troubleshooting, or pixel-perfect{" "}
            <span className="inline-flex items-center gap-1 text-foreground">
              <PenTool className="size-3.5 text-physical-warm" aria-hidden />
              Adobe Illustrator
            </span>{" "}
            designs—I’ve got you covered. Let’s build, fix, or create something
            great.
          </p>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {contactSkills.map((skill) => {
              const Icon = skillIcons[skill.icon];
              return (
                <div
                  key={skill.label}
                  className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-3 py-2.5"
                >
                  <Icon className="size-3.5 shrink-0 text-accent" aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-300">
                    {skill.label}
                  </span>
                </div>
              );
            })}
          </div>

          <a
            href={siteConfig.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full max-w-md items-center gap-3 rounded-xl border border-accent/40 bg-accent-dim px-4 py-3 transition-all hover:border-accent hover:bg-accent/20 hover:shadow-[0_0_32px_-12px_rgba(0,180,255,0.7)] sm:w-auto"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-accent/50 bg-background/70 text-accent">
              <ShieldCheck className="size-5" aria-hidden />
            </span>
            <span className="min-w-0 text-left">
              <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                Verified Credly Certification
                <BadgeCheck className="size-3.5 text-accent" aria-hidden />
              </span>
              <span className="mt-0.5 block font-mono text-[11px] text-muted transition-colors group-hover:text-accent">
                View credential →
              </span>
            </span>
          </a>

          <div className="flex flex-wrap gap-3 pt-1">
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
          className="space-y-4 rounded-xl border border-border bg-surface p-5 sm:p-6"
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
              placeholder="Coffee, code, IT, or design — what’s the brief?"
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
