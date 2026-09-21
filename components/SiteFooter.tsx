"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

type Panel = "privacy" | "cookies" | null;

const panelCopy = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "This site does not run ads, trackers, or third-party analytics, and it does not sell or share any data.",
      "The contact form does not transmit anything on its own — submitting it simply opens your own email client with the message pre-filled, so you stay in control of what is sent.",
      "Guestbook entries you post are stored only in your own browser's local storage on this device. They are not uploaded to a server and nobody else can see them.",
      `For anything else, reach me directly at ${siteConfig.email}.`,
    ],
  },
  cookies: {
    title: "Cookie Preferences",
    body: [
      "This site sets no advertising or tracking cookies, so there is nothing to opt out of.",
      "It uses a small amount of browser storage for two things: remembering that you have already seen the welcome message this session, and keeping any guestbook comment you write on this device.",
      "Clearing this site's data in your browser settings removes both immediately.",
    ],
  },
} as const;

export function Footer() {
  const [panel, setPanel] = useState<Panel>(null);
  const open = panel ? panelCopy[panel] : null;

  const linkClass =
    "text-xs text-neutral-500 transition-colors hover:text-neutral-900 hover:underline";

  return (
    <footer className="w-full border-t border-black/10 bg-[#f0efed] px-6 py-10 pb-28 text-sm text-neutral-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-center">
        <p className="text-neutral-600">
          © 2026 Arafat Sulaiman. All rights reserved.
        </p>

        <p className="flex items-center gap-1.5 font-medium text-neutral-600">
          <span>Created by</span>
          <a
            href="#home"
            className="font-bold tracking-wide text-red-600 transition-all hover:text-red-700 hover:underline"
          >
            AlyyConnect
          </a>
        </p>

        <p className="pt-1 text-xs font-medium tracking-wide text-neutral-600 sm:text-sm">
          Worldwide (Based in Dubai, UAE)
        </p>

        <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-black/10 pt-5">
          <a
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
              "Report Profile",
            )}`}
            className={linkClass}
          >
            Report Profile
          </a>
          <button
            type="button"
            onClick={() => setPanel("privacy")}
            className={linkClass}
          >
            Privacy Policy
          </button>
          <a href="#about" className={linkClass}>
            About This Profile
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            More from Alyy Connect
          </a>
          <button
            type="button"
            onClick={() => setPanel("cookies")}
            className={linkClass}
          >
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
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
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
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-neutral-600"
                  >
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
