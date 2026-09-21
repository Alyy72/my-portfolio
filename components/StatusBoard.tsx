"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

type StatusPayload = {
  checkedAt?: string;
  note?: string;
  rows?: { name: string; url: string; ok: boolean; status: number; ms: number }[];
};

const fallback: StatusPayload = {
  checkedAt: "2026-09-21",
  note: "Spot-check TTFB from 21 Sep 2026. Live Worker checks appear here after deploy.",
  rows: [
    { name: "Golden Vanilla", url: "https://goldenvanilla-ae.com/", ok: true, status: 200, ms: 557 },
    { name: "HIMBA Coffee", url: "https://himba-coffee-live.pages.dev/", ok: true, status: 200, ms: 604 },
    { name: "IKRAM Collection", url: "https://www.ikramcollection.com/", ok: true, status: 200, ms: 581 },
    { name: "Mihbash Cafe", url: "https://mihbash-cafe.alyyconnect.workers.dev/", ok: true, status: 200, ms: 1219 },
  ],
};

export function StatusBoard() {
  const [data, setData] = useState<StatusPayload>(fallback);

  useEffect(() => {
    fetch("/api/status")
      .then((res) => (res.ok ? res.json() : fallback))
      .then((payload: StatusPayload) => setData(payload))
      .catch(() => setData(fallback));
  }, []);

  return (
    <section id="status" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-700">
            Status
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
            Live sites
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            {data.note || `Last check ${data.checkedAt}.`} Times are TTFB in milliseconds.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {(data.rows || []).map((row) => (
            <li
              key={row.url}
              className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 px-4 py-3"
            >
              <div>
                <a
                  href={row.url}
                  className="font-medium text-neutral-900 underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {row.name}
                </a>
                <p className="text-xs text-muted">
                  {row.ok ? `HTTP ${row.status}` : "Unreachable"}
                </p>
              </div>
              <p className="font-mono text-sm text-[#004741]">{row.ms} ms</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
