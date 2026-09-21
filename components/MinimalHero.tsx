"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

const heroStats = [
  { value: "+5", label: "Projects shipped" },
  { value: "+2", label: "Years building" },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function MinimalHero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#f0efed] text-neutral-900"
    >
      {/* Left vertical rail */}
      <div className="pointer-events-none absolute inset-y-0 left-10 hidden w-px flex-col items-center lg:flex">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute top-28 whitespace-nowrap text-[11px] tracking-[0.18em] text-neutral-500 [writing-mode:vertical-rl] rotate-180"
        >
          {siteConfig.title}
        </motion.span>

        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 1.1, ease }}
          className="h-full w-px origin-top bg-neutral-300"
        />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-24 whitespace-nowrap text-[11px] tracking-[0.18em] text-neutral-500 [writing-mode:vertical-rl] rotate-180"
        >
          2026
        </motion.span>
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-end gap-0 lg:min-h-[100svh] lg:grid-cols-[1fr_1.05fr] lg:items-stretch lg:gap-8">
        {/* Left column — type */}
        <div className="flex flex-col justify-center px-6 pb-6 pt-24 sm:px-10 lg:pb-24 lg:pl-28 lg:pr-6 lg:pt-32">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease }}
            className="mb-12 flex gap-12 sm:gap-16"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] tracking-wide text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1, ease }}
            className="text-[22vw] font-light leading-[0.82] tracking-[-0.05em] text-neutral-900 sm:text-[16vw] lg:text-[11vw] xl:text-[9.5rem]"
          >
            Hello
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease }}
            className="mt-6 text-sm text-neutral-600 sm:text-[15px]"
          >
            <span className="mr-2 text-neutral-400">&mdash;</span>
            It&apos;s {siteConfig.name.split(" ")[0]}, a full-stack developer
          </motion.p>

          {/* Scroll cue */}
          <motion.a
            href="#hook"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="group mt-10 inline-flex w-fit items-center gap-2 text-[13px] text-neutral-600 transition-colors hover:text-neutral-900 lg:mt-24"
          >
            Scroll down
            <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </motion.a>
        </div>

        {/* Right column — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2, ease }}
          className="relative h-[52svh] w-full self-end sm:h-[60svh] lg:h-auto lg:min-h-[100svh]"
        >
          <Image
            src="/images/portrait-cutout.png"
            alt={`${siteConfig.name} — ${siteConfig.title}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain object-bottom grayscale contrast-[1.05] lg:object-cover lg:object-[50%_100%]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default MinimalHero;
