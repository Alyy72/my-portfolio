"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { pageLinks, siteConfig } from "@/lib/site-data";
import { CtaRow } from "@/components/CtaRow";

type Panel = "privacy" | "cookies" | null;

const panelCopy = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "This site does not run ads, trackers, or third-party analytics, and it does not sell or share any data.",
      "The contact form posts name, email, and message to a Cloudflare Worker. If Resend is configured, that message is emailed to me. If it is not, your mail client opens instead.",
      "Turnstile may run when a site key is present. Cloudflare sees the challenge token, not your message body beyond the Worker request.",
      `For anything else, reach me directly at ${siteConfig.email}.`,
    ],
  },
  cookies: {
    title: "Cookie Preferences",
    body: [
      "No advertising or analytics cookies are set. There is nothing to opt into or out of until a measurement ID exists.",
      "Cloudflare may set a Turnstile cookie when the contact form widget is shown.",
      "Clearing this site's data in your browser removes any local storage immediately.",
    ],
  },
} as const;

export function Footer() {
  const [panel, setPanel] = useState<Panel>(null);
  const open = panel ? panelCopy[panel] : null;

  const linkClass =
    "text-xs text-neutral-700 transition-colors hover:text-neutral-900 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004741]";

  return (
    <footer className="w-full border-t border-black/10 bg-[#f0efed] px-6 py-10 pb-28 text-sm text-neutral-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 text-center">
        <p className="text-neutral-600">
          © 2026 Arafat Sulaiman. All rights reserved.
        </p>
        <CtaRow home={false} className="justify-center" />
        <p className="flex items-center gap-1.5 font-medium text-neutral-600">
          <span>Created by</span>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold tracking-wide text-[#004741] underline-offset-2 hover:underline"
          >
            AlyyConnect
          </a>
        </p>
        <p className="text-xs font-medium tracking-wide text-neutral-600 sm:text-sm">
          Worldwide (Based in Dubai, UAE)
        </p>
        <nav className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-black/10 pt-5">
          {pageLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <a href={siteConfig.socials.linkedin} className={linkClass} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={siteConfig.socials.github} className={linkClass} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <button type="button" onClick={() => setPanel("privacy")} className={linkClass}>
            Privacy Policy
          </button>
          <button type="button" onClick={() => setPanel("cookies")} className={linkClass}>
            Cookie Preferences
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPanel(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl p-6 text-left"
              role="dialog"
              aria-modal="true"
              aria-labelledby="footer-panel-title"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 id="footer-panel-title" className="text-xl font-semibold tracking-tight text-neutral-900">
                  {open.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setPanel(null)}
                  className="rounded-full border border-black/10 p-2 text-muted transition-colors hover:text-neutral-900"
                  aria-label="Close"
                >
                  <X className="size-4" />
                </button>
              </div>
              <div className="mt-4 space-y-3">
                {open.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-neutral-600">
                    {paragraph}
                  </p>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setPanel(null)}
                className="mt-6 inline-flex h-10 items-center rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white transition hover:bg-neutral-700"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </footer>
  );
}
