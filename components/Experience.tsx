"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/lib/site-data";

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-purple-300">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Work history.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Hands-on support roles that sharpened troubleshooting, communication,
            and operational discipline — the foundation behind how I ship.
          </p>
        </Reveal>

        <div className="relative mt-12">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/10 sm:left-1/2 sm:-translate-x-px" />

          <ol className="space-y-10">
            {experience.map((role, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.li
                  key={role.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative grid sm:grid-cols-2 sm:gap-10"
                >
                  <span className="absolute left-1.5 top-4 size-[23px] rounded-full border-2 border-purple-400 bg-[#0a0a0f] shadow-[0_0_16px_rgba(168,85,247,0.45)] sm:left-1/2 sm:-translate-x-1/2" />

                  <div
                    className={`ml-10 sm:ml-0 ${
                      isLeft
                        ? "sm:pr-10 sm:text-right"
                        : "sm:col-start-2 sm:pl-10"
                    }`}
                  >
                    <div className="glass rounded-3xl p-5 text-left sm:p-6">
                      <div
                        className={`flex flex-wrap items-center gap-2 ${
                          isLeft ? "sm:justify-end" : ""
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-[11px] text-purple-200">
                          <Briefcase className="size-3" />
                          {role.duration}
                        </span>
                      </div>
                      <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-sm text-purple-300">
                        {role.company}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {role.highlights.map((point) => (
                          <li
                            key={point}
                            className={`flex gap-2 text-sm leading-relaxed text-muted ${
                              isLeft ? "sm:flex-row-reverse sm:text-right" : ""
                            }`}
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-purple-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
