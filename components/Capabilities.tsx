"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Layers, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  AiApiMockup,
  CommerceMockup,
  DashboardMockup,
  SeoCloudMockup,
} from "@/components/capability-mockups";
import { capabilities } from "@/lib/site-data";

const mockups = {
  ai: AiApiMockup,
  seo: SeoCloudMockup,
  dashboard: DashboardMockup,
  commerce: CommerceMockup,
} as const;

export function Capabilities() {
  const [active, setActive] = useState<(typeof capabilities)[number] | null>(
    null,
  );

  return (
    <section id="capabilities" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-700">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            What I build — live visual previews.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Interactive UI mockups of the systems, agents, and interfaces I ship
            — no stock images, pure product surfaces.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {capabilities.map((cap, index) => {
            const Mockup = mockups[cap.mockup];

            return (
              <Reveal key={cap.id} delay={index * 0.06}>
                <article className="group glass overflow-hidden rounded-[1.75rem] transition duration-300 hover:border-black/20 hover:shadow-[0_8px_30px_rgba(17,17,17,0.08)]">
                  <div className="overflow-hidden p-4 pb-0">
                    <div className="origin-center transition-transform duration-300 group-hover:scale-105">
                      <Mockup />
                    </div>
                  </div>

                  <div className="space-y-4 p-5 sm:p-6">
                    <div className="flex items-start gap-2">
                      <Layers className="mt-1 size-4 shrink-0 text-neutral-500" />
                      <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                        {cap.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      {cap.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cap.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-700 transition group-hover:border-black/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setActive(cap)}
                      className="inline-flex h-10 items-center rounded-full border border-black/15 bg-black/[0.04] px-4 text-sm font-medium text-neutral-700 transition hover:bg-black/[0.08]"
                    >
                      View Live Preview / Architecture
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem]"
            >
              <div className="flex items-start justify-between gap-3 border-b border-black/10 p-5">
                <div>
                  <p className="font-mono text-xs text-neutral-500">
                    Architecture Preview
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-neutral-900">
                    {active.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="rounded-full border border-black/10 p-2 text-muted hover:text-neutral-900"
                  aria-label="Close"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="p-5">
                {(() => {
                  const Mockup = mockups[active.mockup];
                  return <Mockup />;
                })()}

                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {active.description}
                </p>

                <h4 className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Feature breakdown
                </h4>
                <ul className="mt-3 space-y-2">
                  {active.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-neutral-700"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-neutral-900" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {active.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 px-2.5 py-1 text-[11px] text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
