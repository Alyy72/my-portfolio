"use client";

import { useEffect, useRef, useState } from "react";
import { FolderKanban } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig, stats } from "@/lib/site-data";

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const duration = 900;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.round(value * progress));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
      {count}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-700">
              About Me
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              {siteConfig.name}
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-neutral-600">
              {siteConfig.title}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {siteConfig.skillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/15 bg-black/[0.04] px-3 py-1.5 text-sm font-medium text-neutral-900"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m a {siteConfig.title} based in Dubai, UAE. I design and
              ship web applications, e-commerce platforms, and internal business
              tools with a focus on performance, clarity, and reliable delivery.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-5 text-sm font-medium text-neutral-900 transition hover:border-black/15 hover:text-neutral-600"
              >
                <FolderKanban className="size-4" />
                View Projects
              </a>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.1 + index * 0.05}>
                <div className="glass rounded-2xl p-4 text-center">
                  <AnimatedCounter value={stat.value} />
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
