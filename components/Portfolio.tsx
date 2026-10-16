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
  FileCode2,
  GitBranch,
  Layers,
  Palette,
  Server,
  Sparkles,
  Wind,
  X,
  type LucideIcon,
} from "lucide-react";
import { Modal } from "@/components/Modal";
import { Reveal } from "@/components/Reveal";
import { certificates, projects, techStack } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Tab = "projects" | "certificates" | "stack";

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

export function Portfolio() {
  const [tab, setTab] = useState<Tab>("projects");
  const [activeCert, setActiveCert] = useState<
    (typeof certificates)[number] | null
  >(null);

  return (
    <section id="portfolio" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <span id="experience" className="sr-only">Selected work</span>
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-35" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-700">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Real projects. Practical solutions.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 inline-flex max-w-full flex-wrap rounded-full border border-black/10 bg-black/[0.03] p-1">
            {(
              [
                ["projects", "Projects"],
                ["certificates", "Certificates"],
                ["stack", "Tech Stack"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                aria-pressed={tab === key}
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
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {[...projects].sort((a, b) => {
                  const featured = ["golden-vanilla-web", "himba-coffee", "golden-vanilla-system"];
                  const rank = (id: string) => featured.includes(id) ? featured.indexOf(id) : featured.length;
                  return rank(a.id) - rank(b.id);
                }).map((project, index) => (
                  <article
                    key={project.id}
                    className="glass group rounded-3xl p-5 text-left transition hover:border-black/20 hover:bg-white/90"
                  >
                    <p className="font-mono text-xs text-neutral-500">{index < 3 ? "Featured project" : "Project"}</p>
                    <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                      <a
                        href={`/projects/${project.id}`}
                        className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004741]"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
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
                        <a href="#contact" className="text-sm text-[#004741] underline">Request a walkthrough</a>
                      )}
                    </div>
                  </article>
                ))}
              </motion.div>
            ) : null}

            {tab === "certificates" ? (
              <motion.div
                key="certificates"
                initial={false}
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
                initial={false}
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

          </AnimatePresence>
        </div>
      </div>

      {activeCert ? (
        <Modal labelledBy="certificate-title" onClose={() => setActiveCert(null)}>
              <div className="flex items-start justify-between gap-3 border-b border-black/10 p-5">
                <div>
                  <p className="font-mono text-xs text-neutral-500">Certificate</p>
                  <h3 id="certificate-title" className="mt-1 text-xl font-semibold text-neutral-900">
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
                  View Credly profile
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
        </Modal>
      ) : null}
    </section>
  );
}
