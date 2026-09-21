"use client";

import { FormEvent } from "react";
import toast from "react-hot-toast";
import { Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { QuickLinks } from "@/components/SocialIconBar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

export function Contact() {
  function onContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    form.reset();
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
            Let&apos;s talk.
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
                Send a message — opens your email client to reach me at{" "}
                {siteConfig.email}.
              </p>
              <label className="block space-y-2 text-sm">
                <span className="text-muted">Name</span>
                <Input
                  name="name"
                  required
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
              <Button
                type="submit"
                className="h-11 rounded-full bg-neutral-900 px-5 text-white hover:bg-neutral-700"
              >
                Send Message
                <Send className="size-3.5" />
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass space-y-4 rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-neutral-900">
                Quick links
              </h3>
              <p className="text-sm text-muted">
                Email, WhatsApp, GitHub, and Credly — same details as the footer.
              </p>
              <QuickLinks showTitle={false} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
