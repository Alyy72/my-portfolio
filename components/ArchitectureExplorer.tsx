"use client";

import { useState } from "react";

export function ArchitectureExplorer({
  nodes,
}: {
  nodes: { id: string; label: string; detail: string }[];
}) {
  const [active, setActive] = useState(nodes[0]?.id ?? "");
  const current = nodes.find((node) => node.id === active) ?? nodes[0];

  return (
    <div className="mt-4">
      <ol className="grid gap-2 sm:grid-cols-2">
        {nodes.map((node, index) => {
          const selected = node.id === current?.id;
          return (
            <li key={node.id}>
              <button
                type="button"
                onClick={() => setActive(node.id)}
                aria-pressed={selected}
                className={`w-full rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004741] ${
                  selected
                    ? "border-[#004741] bg-[#004741]/5"
                    : "border-black/10 bg-white/80 hover:border-[#004741]/40"
                }`}
              >
                <span className="font-mono text-[10px] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block font-semibold text-[#004741]">
                  {node.label}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      {current ? (
        <p className="mt-3 rounded-2xl border border-black/10 bg-white/70 p-4 text-sm text-neutral-700">
          {current.detail}
        </p>
      ) : null}
    </div>
  );
}
