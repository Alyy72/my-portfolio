"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Download, FolderKanban } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { KeywordSearchLink } from "@/components/KeywordSearchLink";
import { siteConfig, stats } from "@/lib/site-data";

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
    <span ref={ref} className="text-3xl font-semibold text-white sm:text-4xl">
      {count}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-purple-300">
              About Me
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {siteConfig.name}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {siteConfig.seoRoles.map((role) => (
                <KeywordSearchLink
                  key={role}
                  role={role}
                  className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-sm font-medium text-purple-200"
                />
              ))}
            </div>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m a{" "}
              <KeywordSearchLink
                role="Full-Stack Developer"
                className="font-medium text-white"
              />{" "}
              and{" "}
              <KeywordSearchLink
                role="System Developer"
                className="font-medium text-white"
              />{" "}
              based in Dubai, UAE. I design and ship web applications,{" "}
              <KeywordSearchLink
                role="E-Commerce Specialist"
                className="font-medium text-white"
              >
                e-commerce platforms
              </KeywordSearchLink>
              , and internal business tools with a focus on performance,
              clarity, and production-ready delivery.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-purple-500 px-5 text-sm font-semibold text-white transition hover:bg-purple-400"
              >
                <Download className="size-4" />
                Download CV
              </a>
              <a
                href="#portfolio"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium text-white transition hover:border-purple-400/50 hover:text-purple-200"
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

        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="glass relative overflow-hidden rounded-[2rem] p-6">
              <div className="absolute inset-0 bg-grid-pattern opacity-60" />
              <div className="absolute inset-0 aura-purple" />
              <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full border border-white/15 shadow-[0_0_40px_rgba(168,85,247,0.25)] sm:w-64">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  fill
                  sizes="256px"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative mt-5 text-center">
                <p className="font-medium text-white">{siteConfig.name}</p>
                <KeywordSearchLink
                  role={siteConfig.title}
                  className="mt-1 justify-center text-sm text-purple-300"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
