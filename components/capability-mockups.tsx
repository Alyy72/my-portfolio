"use client";

import { motion } from "framer-motion";

export function AiApiMockup() {
  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-[#07070c] p-3 font-mono text-[10px] leading-relaxed sm:h-48 sm:text-[11px]">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-red-500/80" />
          <span className="size-2 rounded-full bg-amber-400/80" />
          <span className="size-2 rounded-full bg-emerald-400/80" />
        </div>
        <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[9px] text-emerald-300">
          200 OK · Active Endpoint
        </span>
      </div>
      <pre className="overflow-hidden text-left text-zinc-400">
        <span className="text-purple-300">POST</span> /api/agents/invoke{"\n"}
        {"{"}
        {"\n"}
        {"  "}
        <span className="text-sky-300">&quot;model&quot;</span>:{" "}
        <span className="text-amber-200">&quot;claude-sonnet&quot;</span>,{"\n"}
        {"  "}
        <span className="text-sky-300">&quot;tools&quot;</span>: [
        <span className="text-emerald-300">&quot;webhook&quot;</span>,{" "}
        <span className="text-emerald-300">&quot;crm.sync&quot;</span>],{"\n"}
        {"  "}
        <span className="text-sky-300">&quot;status&quot;</span>:{" "}
        <span className="text-emerald-300">&quot;streaming&quot;</span>
        {"\n"}
        {"}"}
      </pre>
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
        {["Claude API", "Gemini API", "Webhooks"].map((badge, i) => (
          <motion.span
            key={badge}
            className="rounded-full border border-purple-400/30 bg-purple-500/15 px-2 py-0.5 text-[9px] text-purple-200"
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          >
            {badge}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export function SeoCloudMockup() {
  const bars = [40, 65, 48, 80, 55, 92, 70];

  return (
    <div className="grid h-44 grid-cols-2 gap-2 overflow-hidden rounded-2xl border border-white/10 bg-[#07070c] p-2 sm:h-48">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-left">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-blue-500" />
          <span className="text-[9px] text-muted">Google · SERP Preview</span>
        </div>
        <p className="text-[10px] font-medium text-sky-300">
          goldenvanilla-ae.com
        </p>
        <p className="mt-1 line-clamp-2 text-[9px] leading-snug text-emerald-300/90">
          Specialty vanilla · Dubai storefront with structured JSON-LD
        </p>
        <div className="mt-2 rounded border border-white/10 bg-black/40 p-1.5 font-mono text-[8px] text-zinc-400">
          @type: Organization{"\n"}
          schema: JSON-LD ✓
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
        <p className="mb-2 text-[9px] text-muted">GA4 · Live Traffic</p>
        <div className="flex h-24 items-end gap-1">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-purple-600/80 to-sky-400/80"
              initial={{ height: 8 }}
              animate={{ height: `${h}%` }}
              transition={{
                duration: 1.2,
                delay: i * 0.08,
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 1.5,
              }}
            />
          ))}
        </div>
        <p className="mt-2 text-[9px] text-emerald-300">+24% sessions · 7d</p>
      </div>
    </div>
  );
}

export function DashboardMockup() {
  const ring = 70;
  const circumference = 2 * Math.PI * 28;

  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-[#07070c] p-3 sm:h-48">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[9px] text-muted">Deck · Executive View</span>
        <div className="flex gap-1">
          {["◀", "▶", "⛶"].map((c) => (
            <span
              key={c}
              className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] text-zinc-300"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr] items-center gap-3">
        <svg width="72" height="72" viewBox="0 0 72 72" className="-rotate-90">
          <circle
            cx="36"
            cy="36"
            r="28"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
          />
          <motion.circle
            cx="36"
            cy="36"
            r="28"
            fill="none"
            stroke="url(#capGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset: circumference * (1 - ring / 100),
            }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="capGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
        <div className="space-y-2">
          <div className="flex justify-between text-[10px]">
            <span className="text-muted">Conversion</span>
            <span className="text-white">{ring}%</span>
          </div>
          <div className="flex h-16 items-end gap-1">
            {[35, 55, 42, 78, 60, 88].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-purple-500/70"
                style={{ height: `${h}%` }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  delay: i * 0.15,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {["MRR", "NPS", "SLA"].map((kpi, i) => (
          <div
            key={kpi}
            className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-center"
          >
            <p className="text-[8px] text-muted">{kpi}</p>
            <p className="text-[10px] font-semibold text-white">
              {[`$${12 + i}k`, "72", "99%"][i]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CommerceMockup() {
  return (
    <div className="grid h-44 grid-cols-2 gap-2 overflow-hidden rounded-2xl border border-white/10 bg-[#07070c] p-2 sm:h-48">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2">
        <div className="mb-1.5 flex items-center gap-1 border-b border-white/10 pb-1">
          <span className="size-1.5 rounded-full bg-red-400" />
          <span className="size-1.5 rounded-full bg-amber-400" />
          <span className="size-1.5 rounded-full bg-emerald-400" />
          <span className="ml-1 truncate text-[8px] text-muted">
            storefront / checkout
          </span>
        </div>
        <div className="space-y-1.5">
          <div className="h-8 rounded-md bg-gradient-to-r from-purple-500/30 to-fuchsia-400/20" />
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className="mt-2 rounded-md bg-emerald-500/80 py-1 text-center text-[9px] font-semibold text-black">
            Pay with Ziina
          </div>
          <div className="rounded-md border border-emerald-500/40 py-1 text-center text-[8px] text-emerald-300">
            WhatsApp Lead →
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2">
        <div className="mb-1.5 flex items-center justify-between border-b border-white/10 pb-1">
          <span className="text-[8px] text-muted">CRM · Ops</span>
          <span className="rounded bg-purple-500/20 px-1.5 py-0.5 text-[8px] text-purple-200">
            PIN ●●●●
          </span>
        </div>
        <div className="space-y-1">
          {["Leads", "Inventory", "Invoices"].map((row, i) => (
            <div
              key={row}
              className="flex items-center justify-between rounded-md border border-white/5 bg-black/30 px-2 py-1"
            >
              <span className="text-[9px] text-zinc-300">{row}</span>
              <span className="text-[9px] text-purple-300">
                {[24, 148, 7][i]}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 h-8 rounded-md border border-dashed border-white/15 bg-white/[0.02] text-center text-[8px] leading-8 text-muted">
          Claude Ops Assistant
        </div>
      </div>
    </div>
  );
}
