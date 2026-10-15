"use client";

import { Layers } from "lucide-react";
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
  return (
    <section id="capabilities" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-700">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            What I can help you build.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Illustrative previews of the interfaces and integrations I work with.
            These examples use sample data; explore my projects above for delivered work.
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
                    <details className="rounded-2xl border border-black/15 p-4">
                      <summary className="cursor-pointer text-sm font-medium text-[#004741]">Explore features</summary>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                        {cap.features.map((feature) => <li key={feature}>{feature}</li>)}
                      </ul>
                    </details>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

    </section>
  );
}
