"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/site-data";

const lines = [
  {
    id: "arafat",
    text: "ARAFAT",
    className:
      "block text-[clamp(2.75rem,12vw,13.5rem)] font-semibold leading-none tracking-tighter text-[#F0EDE4]",
  },
  {
    id: "sulaiman",
    text: "SULAIMAN",
    className:
      "block text-[clamp(2.75rem,12vw,13.5rem)] font-semibold leading-none tracking-tighter text-[#F0EDE4]",
  },
  {
    id: "role",
    text: "FULL-STACK DEVELOPER",
    className:
      "mt-5 block text-[clamp(0.72rem,2.1vw,1.05rem)] font-medium uppercase tracking-[0.42em] text-[#F0EDE4]/80 sm:mt-7",
  },
] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

const line = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 62, damping: 18, mass: 0.9 },
  },
};

export function BigHero({ ready = true }: { ready?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "18%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.08]);
  const typeY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-22%"]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#004741]"
    >
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="pointer-events-none absolute inset-0 z-0 will-change-transform"
      >
        <img
          src="/images/portrait-cutout.webp"
          alt="Arafat Sulaiman, Full-Stack Developer based in Dubai"
          width={1600}
          height={1800}
          decoding="async"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 z-[1] bg-[#004741]/85 mix-blend-multiply" />

      <motion.div
        style={{ y: typeY }}
        className="relative z-10 mx-auto flex w-full max-w-[96vw] flex-col items-center px-4 text-center will-change-transform sm:px-6"
      >
        <motion.h1
          variants={reduced ? undefined : container}
          initial={reduced ? false : "hidden"}
          animate={ready ? "show" : "hidden"}
        >
          {lines.map((item) => (
            <span key={item.id} className="block overflow-hidden">
              <motion.span variants={reduced ? undefined : line} className={item.className}>
                {item.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: reduced ? 0 : 0.55, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#F0EDE4] px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#004741] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0EDE4]"
          >
            Start a project
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center rounded-full border border-[#F0EDE4]/70 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#F0EDE4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0EDE4]"
          >
            See the work
          </a>
          <a
            href={siteConfig.resumeUrl}
            className="inline-flex items-center rounded-full border border-[#F0EDE4]/40 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#F0EDE4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0EDE4]"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
