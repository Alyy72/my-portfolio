"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export function Hook() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 px-4 py-16 sm:px-6 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/25 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.28em] text-purple-300"
        >
          {siteConfig.hook.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.1]"
        >
          {siteConfig.hook.line}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {siteConfig.hook.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#portfolio"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-purple-500 px-5 text-sm font-semibold text-white transition hover:bg-purple-400"
          >
            See the proof
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-white transition hover:border-purple-400/50 hover:text-purple-200"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
