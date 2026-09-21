"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stages = [
  { id: "01", label: "THE BLUEPRINT" },
  { id: "02", label: "THE FRAMEWORK" },
  { id: "03", label: "SYSTEM ASSEMBLY" },
  { id: "04", label: "FINISHED & LIVE" },
] as const;

export function InteractiveBuildSequence() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacityStage1 = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const opacityStage2 = useTransform(scrollYProgress, [0.25, 0.45, 0.5], [0, 1, 0]);
  const opacityStage3 = useTransform(scrollYProgress, [0.5, 0.7, 0.75], [0, 1, 0]);
  const opacityStage4 = useTransform(scrollYProgress, [0.75, 0.95, 1], [0, 1, 1]);

  const scaleStage1 = useTransform(scrollYProgress, [0, 0.2], [0.96, 1]);
  const scaleStage2 = useTransform(scrollYProgress, [0.25, 0.45], [0.94, 1]);
  const scaleStage3 = useTransform(scrollYProgress, [0.5, 0.7], [0.92, 1]);
  const scaleFinal = useTransform(scrollYProgress, [0.75, 1], [0.9, 1]);

  const rotateY1 = useTransform(scrollYProgress, [0, 0.25], [8, 0]);
  const rotateY2 = useTransform(scrollYProgress, [0.25, 0.5], [-10, 0]);
  const rotateY3 = useTransform(scrollYProgress, [0.5, 0.75], [12, 0]);

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const stage1Active = useTransform(scrollYProgress, (v) => (v < 0.25 ? 1 : 0.35));
  const stage2Active = useTransform(scrollYProgress, (v) =>
    v >= 0.25 && v < 0.5 ? 1 : 0.35,
  );
  const stage3Active = useTransform(scrollYProgress, (v) =>
    v >= 0.5 && v < 0.75 ? 1 : 0.35,
  );
  const stage4Active = useTransform(scrollYProgress, (v) => (v >= 0.75 ? 1 : 0.35));
  const stageOpacities = [stage1Active, stage2Active, stage3Active, stage4Active];

  return (
    <section
      id="build-sequence"
      ref={containerRef}
      className="relative h-[300vh] bg-[#0a0a0f] text-white"
    >
      <div
        className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6"
        style={{ perspective: "1200px" }}
      >
        <div className="pointer-events-none absolute h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute right-10 top-20 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />

        {/* Vertical progress indicator */}
        <div className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3 sm:left-8 md:flex">
          <div className="relative h-48 w-[2px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              style={{ height: progressHeight }}
              className="absolute inset-x-0 top-0 origin-top bg-gradient-to-b from-cyan-400 via-purple-400 to-emerald-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            {stages.map((stage, index) => (
              <motion.span
                key={stage.id}
                style={{ opacity: stageOpacities[index] }}
                className="font-mono text-[10px] tracking-widest text-white/80"
              >
                {stage.id}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Stage 1: Blueprint */}
        <motion.div
          style={{
            opacity: opacityStage1,
            scale: scaleStage1,
            rotateY: rotateY1,
          }}
          className="absolute flex flex-col items-center text-center"
        >
          <span className="mb-2 font-mono text-sm tracking-widest text-cyan-400">
            01 // THE BLUEPRINT
          </span>
          <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
            System Architecture
          </h2>
          <div className="relative flex h-[220px] w-[340px] items-center justify-center overflow-hidden rounded-2xl border border-cyan-500/40 bg-cyan-950/20 backdrop-blur-md md:h-[360px] md:w-[600px]">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(34,211,238,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.25) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <svg
              viewBox="0 0 320 180"
              className="relative z-10 h-[70%] w-[85%]"
              fill="none"
            >
              <rect
                x="20"
                y="30"
                width="80"
                height="40"
                rx="6"
                stroke="#22d3ee"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <rect
                x="120"
                y="20"
                width="90"
                height="50"
                rx="6"
                stroke="#22d3ee"
                strokeWidth="1.5"
              />
              <rect
                x="230"
                y="35"
                width="70"
                height="35"
                rx="6"
                stroke="#22d3ee"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <circle cx="160" cy="120" r="28" stroke="#67e8f9" strokeWidth="1.5" />
              <path
                d="M60 70 V100 H160 M210 70 V100 H160 M160 92 V148"
                stroke="#22d3ee"
                strokeWidth="1"
                opacity="0.7"
              />
              <text x="28" y="54" fill="#67e8f9" fontSize="8" fontFamily="monospace">
                API NODE
              </text>
              <text x="135" y="48" fill="#67e8f9" fontSize="8" fontFamily="monospace">
                SCHEMA
              </text>
              <text x="148" y="124" fill="#a5f3fc" fontSize="8" fontFamily="monospace">
                CORE
              </text>
            </svg>
            <p className="absolute bottom-4 font-mono text-[10px] text-cyan-400/80 md:text-xs">
              [ WIREFRAME & SCHEMA API NODES ]
            </p>
          </div>
        </motion.div>

        {/* Stage 2: Framework */}
        <motion.div
          style={{
            opacity: opacityStage2,
            scale: scaleStage2,
            rotateY: rotateY2,
          }}
          className="absolute flex flex-col items-center text-center"
        >
          <span className="mb-2 font-mono text-sm tracking-widest text-purple-400">
            02 // THE FRAMEWORK
          </span>
          <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
            Backend & Database
          </h2>
          <div className="relative flex h-[220px] w-[340px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-purple-500/40 bg-purple-950/20 p-4 backdrop-blur-md md:h-[360px] md:w-[600px]">
            <div className="grid w-full grid-cols-3 gap-2 md:gap-3">
              {["Auth Edge", "Workers", "D1 / KV"].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-purple-400/30 bg-purple-500/10 px-2 py-3 font-mono text-[9px] text-purple-200 md:text-xs"
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
              <span className="font-mono text-[9px] text-purple-300">SYNC</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
            </div>
            <div className="grid w-full grid-cols-2 gap-2 md:gap-3">
              {["Cloudflare Edge", "API Gateway"].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/10 px-2 py-4 font-mono text-[9px] text-fuchsia-200 md:text-xs"
                >
                  {label}
                </div>
              ))}
            </div>
            <p className="font-mono text-[10px] text-purple-400/80 md:text-xs">
              [ LOGIC & CLOUDFLARE EDGE ROUTING ]
            </p>
          </div>
        </motion.div>

        {/* Stage 3: Assembly */}
        <motion.div
          style={{
            opacity: opacityStage3,
            scale: scaleStage3,
            rotateY: rotateY3,
          }}
          className="absolute flex flex-col items-center text-center"
        >
          <span className="mb-2 font-mono text-sm tracking-widest text-pink-400">
            03 // SYSTEM ASSEMBLY
          </span>
          <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
            Component Integration
          </h2>
          <div className="relative h-[220px] w-[340px] overflow-hidden rounded-2xl border border-pink-500/40 bg-pink-950/20 backdrop-blur-md md:h-[360px] md:w-[600px]">
            <motion.div
              className="absolute left-4 top-4 rounded-lg border border-pink-400/40 bg-pink-500/15 px-3 py-2 font-mono text-[9px] text-pink-200 md:text-xs"
              animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              UI Module
            </motion.div>
            <motion.div
              className="absolute right-6 top-10 rounded-lg border border-rose-400/40 bg-rose-500/15 px-3 py-2 font-mono text-[9px] text-rose-200 md:text-xs"
              animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              Payment Portal
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-8 rounded-lg border border-fuchsia-400/40 bg-fuchsia-500/15 px-3 py-2 font-mono text-[9px] text-fuchsia-200 md:text-xs"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              Media Assets
            </motion.div>
            <motion.div
              className="absolute bottom-8 right-10 rounded-lg border border-pink-300/40 bg-white/5 px-3 py-2 font-mono text-[9px] text-pink-100 md:text-xs"
              animate={{ scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              Motion Layer
            </motion.div>
            <div className="absolute inset-0 flex items-end justify-center pb-4">
              <p className="font-mono text-[10px] text-pink-400/80 md:text-xs">
                [ TAILWIND & MOTION INTERACTIVE LAYERS ]
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stage 4: Finished & Live */}
        <motion.div
          style={{ opacity: opacityStage4, scale: scaleFinal }}
          className="absolute flex flex-col items-center text-center"
        >
          <span className="mb-2 font-mono text-sm tracking-widest text-emerald-400">
            04 // FINISHED & LIVE
          </span>
          <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
            Golden Vanilla System
          </h2>
          <div className="relative w-[340px] overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-emerald-950/40 via-[#0d0d12] to-cyan-950/30 p-4 shadow-[0_0_50px_rgba(16,185,129,0.2)] backdrop-blur-xl md:w-[680px] md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
                LIVE · PRODUCTION
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {["CRM Leads", "Inventory", "Invoices"].map((card) => (
                <div
                  key={card}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-left"
                >
                  <p className="text-[10px] text-zinc-400">{card}</p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {card === "CRM Leads"
                      ? "24"
                      : card === "Inventory"
                        ? "148"
                        : "7"}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <a
                href="https://goldenvanilla-ae.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-full bg-emerald-500 px-4 text-sm font-semibold text-black transition hover:bg-emerald-400"
              >
                Open Live Site
              </a>
              <a
                href="#portfolio"
                className="inline-flex h-10 items-center rounded-full border border-white/15 bg-white/5 px-4 text-sm font-medium text-white transition hover:border-emerald-400/40 hover:text-emerald-200"
              >
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default InteractiveBuildSequence;
