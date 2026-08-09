"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Coffee, Terminal } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

const terminalLines = [
  { prefix: "$", text: "whoami", delay: 0.2 },
  {
    prefix: "→",
    text: "arafat — barista · agriculturist · builder",
    delay: 0.45,
  },
  { prefix: "$", text: "stack --active", delay: 0.7 },
  {
    prefix: "→",
    text: "cursor · cline · github · cloudflare",
    delay: 0.95,
  },
  { prefix: "$", text: "deploy --pipeline", delay: 1.2 },
  { prefix: "→", text: "shipped. grit intact.", delay: 1.45, accent: true },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden border-b border-border pt-16"
    >
      <div className="grid min-h-[calc(100svh-4rem)] lg:grid-cols-2">
        <div className="relative flex flex-col justify-end overflow-hidden bg-physical px-6 py-12 sm:px-10 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(196,164,132,0.22),transparent_55%)]" />
          <div className="absolute inset-0 opacity-30 grain" />
          <div className="absolute -right-16 top-24 size-64 rounded-full bg-physical-warm/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-physical-warm">
              <Coffee className="size-3.5" aria-hidden />
              Dubai · 22 · Hands-on
            </div>

            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-physical-warm/80">
                {siteConfig.name}
              </p>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
                {siteConfig.tagline}
              </h1>
              <p className="max-w-md text-base leading-relaxed text-zinc-300 sm:text-lg">
                {siteConfig.subhead}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-7 text-base font-medium text-black transition-colors hover:bg-accent-hover"
              >
                View My Work
              </a>
              <a
                href="#timeline"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-physical-warm/30 px-7 text-base font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Read the Timeline
                <ArrowDownRight className="size-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative flex items-center overflow-hidden bg-background px-6 py-12 sm:px-10 lg:py-16">
          <div className="pointer-events-none absolute inset-0 grid-fade opacity-70" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg"
          >
            <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-[0_0_80px_-20px_rgba(0,180,255,0.45)]">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-zinc-600" />
                <span className="size-2.5 rounded-full bg-zinc-600" />
                <span className="size-2.5 rounded-full bg-accent/80" />
                <div className="ml-2 flex items-center gap-2 font-mono text-[11px] text-muted">
                  <Terminal className="size-3.5 text-accent" aria-hidden />
                  agentic-shell — arafat@m5
                </div>
              </div>
              <div className="space-y-2.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
                {terminalLines.map((line) => (
                  <motion.p
                    key={`${line.prefix}-${line.text}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: line.delay, duration: 0.35 }}
                    className={line.accent ? "text-accent" : "text-zinc-300"}
                  >
                    <span className="mr-2 text-muted">{line.prefix}</span>
                    {line.text}
                  </motion.p>
                ))}
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ delay: 1.7, duration: 1.1, repeat: Infinity }}
                  className="mt-2 inline-block h-4 w-2 bg-accent align-middle"
                />
              </div>
            </div>

            <p className="mt-5 max-w-sm font-mono text-xs leading-relaxed text-muted">
              Senior barista by day. Agentic builder by night. Same hands —
              different tools.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
