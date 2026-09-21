"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Atom,
  Award,
  Braces,
  Cloud,
  Code2,
  ExternalLink,
  Frame,
  FileCode2,
  GitBranch,
  Layers,
  Paintbrush,
  Palette,
  PenTool,
  Server,
  Sparkles,
  Wind,
  X,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { certificates, projects, techStack } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Tab = "projects" | "certificates" | "stack" | "graphics";

const iconMap: Record<string, LucideIcon> = {
  FileCode2,
  Atom,
  Layers,
  Wind,
  Code2,
  Palette,
  Braces,
  Server,
  Cloud,
  GitBranch,
  Sparkles,
};

const floatingDesignIcons = [
  { Icon: PenTool, className: "left-[12%] top-[18%]", delay: 0 },
  { Icon: Palette, className: "right-[14%] top-[22%]", delay: 0.4 },
  { Icon: Paintbrush, className: "left-[18%] bottom-[20%]", delay: 0.8 },
  { Icon: Frame, className: "right-[16%] bottom-[18%]", delay: 1.2 },
] as const;

export function Portfolio() {
  const [tab, setTab] = useState<Tab>("projects");
  const [activeCert, setActiveCert] = useState<
    (typeof certificates)[number] | null
  >(null);

  return (
    <section id="portfolio" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-35" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Selected work & credentials.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 inline-flex max-w-full flex-wrap rounded-full border border-black/10 bg-black/[0.03] p-1">
            {(
              [
                ["projects", "Projects"],
                ["certificates", "Certificates"],
                ["stack", "Tech Stack"],
                ["graphics", "Graphics Design"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  tab === key
                    ? "bg-neutral-900 text-white"
                    : "text-muted hover:text-neutral-900",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {tab === "projects" ? (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {projects.map((project) => (
                  <article
                    key={project.id}
                    className="glass group rounded-3xl p-5 text-left transition hover:border-black/20 hover:bg-white/90"
                  >
                    <p className="font-mono text-xs text-neutral-500">Project</p>
                    <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                      <a
                        href={`/projects/${project.id}`}
                        className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004741]"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/10 px-2.5 py-1 text-[11px] text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={`/projects/${project.id}`}
                        className="text-sm font-medium text-neutral-900 underline-offset-2 hover:underline"
                      >
                        Case study
                      </a>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-neutral-900"
                        >
                          Live Demo
                          <ExternalLink className="size-3.5" />
                        </a>
                      ) : (
                        <span className="text-sm text-muted">Walkthrough available</span>
                      )}
                    </div>
                  </article>
                ))}
              </motion.div>
            ) : null}

            {tab === "certificates" ? (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {certificates.map((cert) => (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="glass rounded-3xl p-5 text-left transition hover:border-black/20"
                  >
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-black/[0.04] text-neutral-700">
                      <Award className="size-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-neutral-900">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                    <p className="mt-3 text-xs text-neutral-500">
                      {cert.pdf ? "Click to preview PDF →" : "Open Credly →"}
                    </p>
                  </button>
                ))}
              </motion.div>
            ) : null}

            {tab === "stack" ? (
              <motion.div
                key="stack"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
              >
                {techStack.map((item) => {
                  const Icon = iconMap[item.icon] ?? Code2;
                  return (
                    <div
                      key={item.name}
                      className="glass flex items-center gap-3 rounded-2xl px-4 py-3"
                    >
                      <Icon className="size-4 text-neutral-500" />
                      <span className="text-sm text-neutral-900">{item.name}</span>
                    </div>
                  );
                })}
              </motion.div>
            ) : null}

            {tab === "graphics" ? (
              <motion.div
                key="graphics"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="relative"
              >
                <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-10 sm:py-20">
                  <div className="pointer-events-none absolute inset-0 aura-purple opacity-80" />
                  <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />

                  {floatingDesignIcons.map(({ Icon, className, delay }) => (
                    <motion.div
                      key={className}
                      className={`pointer-events-none absolute ${className} flex size-12 items-center justify-center rounded-2xl border border-black/10 bg-black/[0.03] text-neutral-700`}
                      animate={{ y: [0, -12, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay,
                      }}
                    >
                      <Icon className="size-5" />
                    </motion.div>
                  ))}

                  <div className="relative z-10 mx-auto max-w-xl">
                    <span className="inline-flex items-center rounded-full border border-black/15 bg-black/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700">
                      Coming Soon
                    </span>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                      Graphics Design
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                      A curated gallery of visual design work, brand identity
                      assets, and graphics projects is currently being prepared.
                      Check back soon!
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      {/* Certificate modal */}
      <AnimatePresence>
        {activeCert ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="glass flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl"
            >
              <div className="flex items-start justify-between gap-3 border-b border-black/10 p-5">
                <div>
                  <p className="font-mono text-xs text-neutral-500">Certificate</p>
                  <h3 className="mt-1 text-xl font-semibold text-neutral-900">
                    {activeCert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{activeCert.issuer}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="rounded-full border border-black/10 p-2 text-muted hover:text-neutral-900"
                  aria-label="Close"
                >
                  <X className="size-4" />
                </button>
              </div>

              {activeCert.pdf ? (
                <iframe
                  src={`${activeCert.pdf}#toolbar=1`}
                  title={activeCert.title}
                  className="min-h-[60vh] w-full flex-1 bg-white"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 p-10 text-center">
                  <Award className="size-12 text-neutral-500" />
                  <p className="max-w-sm text-sm text-muted">
                    View all verified badges on my Credly profile.
                  </p>
                </div>
              )}

              <div className="flex flex-wrap justify-end gap-3 border-t border-black/10 p-4">
                {activeCert.pdf ? (
                  <a
                    href={activeCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-neutral-900 px-4 text-sm font-semibold text-white"
                  >
                    Open PDF
                    <ExternalLink className="size-3.5" />
                  </a>
                ) : null}
                <a
                  href={activeCert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-black/10 px-4 text-sm text-neutral-900"
                >
                  View on Credly
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
