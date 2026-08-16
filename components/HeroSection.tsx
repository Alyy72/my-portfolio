"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { KeywordSearchLink } from "@/components/KeywordSearchLink";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % siteConfig.rotatingRoles.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="pointer-events-none absolute left-1/4 top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted"
          >
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Available for work · {siteConfig.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            I ship products.
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-200 to-white bg-clip-text text-transparent">
              Not excuses.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="inline-flex min-h-10 items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2"
          >
            <KeywordSearchLink
              role={siteConfig.rotatingRoles[roleIndex]}
              className="text-sm font-medium text-purple-200"
            />
            <span className="ml-1 inline-block h-4 w-0.5 bg-purple-300 caret-blink" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="flex flex-wrap gap-2"
          >
            {siteConfig.seoRoles.map((role) => (
              <KeywordSearchLink
                key={role}
                role={role}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300"
              />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            {siteConfig.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="flex flex-wrap gap-2"
          >
            {siteConfig.techBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-gray-300"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-purple-300"
            >
              Explore my work below
              <ArrowDown className="size-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted transition hover:text-white"
            >
              Scroll ↓
            </a>
          </motion.div>
        </div>

        {/* Interactive ID badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="mx-auto mb-0 flex w-12 flex-col items-center">
            <div className="h-3 w-3 rounded-full border border-white/30 bg-zinc-700" />
            <div className="h-16 w-[3px] bg-gradient-to-b from-zinc-500 to-zinc-700" />
          </div>

          <div className="lanyard-swing">
            <Tilt
              glareEnable
              glareMaxOpacity={0.2}
              glareColor="#c084fc"
              glarePosition="all"
              tiltMaxAngleX={14}
              tiltMaxAngleY={14}
              perspective={1200}
              scale={1.03}
              transitionSpeed={900}
            >
              <div className="glass relative overflow-hidden rounded-3xl p-4 shadow-[0_20px_60px_-20px_rgba(168,85,247,0.45)]">
                <div className="absolute inset-0 aura-purple opacity-70" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-purple-300">
                      ID Badge
                    </p>
                    <span className="rounded-md border border-white/10 bg-black/30 px-2 py-1 font-mono text-[10px] text-muted">
                      SD CARD
                    </span>
                  </div>

                  <div className="relative mx-auto aspect-square w-44 overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:w-52">
                    <Image
                      src={siteConfig.profileImage}
                      alt={siteConfig.name}
                      fill
                      priority
                      sizes="208px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="text-center">
                    <h2 className="text-xl font-semibold tracking-tight text-white">
                      {siteConfig.name}
                    </h2>
                    <p className="mt-1 text-sm text-purple-300">
                      <KeywordSearchLink role={siteConfig.title} />
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {siteConfig.location}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-3">
                    <div className="h-8 w-14 rounded bg-[repeating-linear-gradient(90deg,#222_0,#222_2px,#111_2px,#111_4px)] opacity-80" />
                    <p className="font-mono text-[10px] text-muted">
                      DEV-2026
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
