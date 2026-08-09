"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import { timeline } from "@/lib/site-data";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="border-b border-border px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01 — Path"
          title="Birth to present."
          description="Not a resume. A sequence of pressure tests — soil, service, study, miles, and finally silicon."
        />

        <div ref={containerRef} className="relative mt-14 pl-2 sm:mt-16 sm:pl-0">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-px" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[11px] top-2 w-px origin-top bg-accent sm:left-1/2 sm:-translate-x-px"
          />

          <ol className="space-y-12 sm:space-y-16">
            {timeline.map((node, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.li
                  key={node.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid sm:grid-cols-2 sm:gap-12"
                >
                  <div
                    className={`absolute left-0 top-1.5 size-[23px] rounded-full border-2 border-accent bg-background sm:left-1/2 sm:-translate-x-1/2 ${
                      index === timeline.length - 1
                        ? "shadow-[0_0_20px_rgba(0,180,255,0.55)]"
                        : ""
                    }`}
                  />

                  <div
                    className={`pl-10 sm:pl-0 ${
                      isLeft ? "sm:pr-12 sm:text-right" : "sm:col-start-2 sm:pl-12"
                    }`}
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      {node.date}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {node.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                      {node.body}
                    </p>
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
