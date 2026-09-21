"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { engineeringWork } from "@/lib/site-data";

export function Experience() {
  const reduced = useReducedMotion();
  return (
    <section id="experience" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#004741]/55">
            Engineering
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#004741] sm:text-4xl">
            Selected Engineering Work
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#004741]/70 sm:text-base">
            Products and architectures I have designed, built, and shipped.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {engineeringWork.map((work, index) => (
            <motion.article
              key={work.id}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: reduced ? 0 : 0.45, delay: reduced ? 0 : index * 0.08 }}
              className="rounded-3xl border border-[#004741]/20 bg-[#F0EDE4] p-5 text-left sm:p-6"
            >
              <span className="inline-flex items-center rounded-full border border-[#004741]/20 bg-[#004741]/[0.06] px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-[#004741]">
                {work.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#004741]">
                {work.title}
              </h3>
              <div className="mt-4 border-t border-[#004741]/15 pt-4">
                <ul className="space-y-2.5">
                  {work.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-[#004741]/75"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#004741]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {work.slug ? (
                <Link
                  href={`/projects/${work.slug}`}
                  className="mt-4 inline-flex text-sm font-medium text-[#004741] underline-offset-2 hover:underline"
                >
                  Case study
                </Link>
              ) : (
                <p className="mt-4 text-sm text-[#004741]/60">
                  No public demo on this site.
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
