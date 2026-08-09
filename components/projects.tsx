"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Sparkles } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  className,
}: {
  project: (typeof projects)[number];
  className?: string;
}) {
  const [showFails, setShowFails] = useState(false);
  const imageSrc = project.image;
  const imageAlt = project.imageAlt ?? project.title;

  return (
    <article
      className={cn(
        "flex min-h-[320px] flex-col justify-between overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/40",
        className,
      )}
    >
      {imageSrc ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {project.status}
              </p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
            </div>
            <Button
              type="button"
              size="sm"
              variant={showFails ? "default" : "outline"}
              onClick={() => setShowFails((v) => !v)}
              aria-pressed={showFails}
            >
              {showFails ? (
                <>
                  <AlertTriangle className="size-3.5" />
                  Fails
                </>
              ) : (
                <>
                  <Sparkles className="size-3.5" />
                  Wins
                </>
              )}
            </Button>
          </div>

          <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 min-h-[96px] border-t border-border pt-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={showFails ? "fails" : "success"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {showFails ? "Fails / Lessons" : "What shipped"}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {showFails ? project.fails : project.success}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" className="border-b border-border px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 — Work"
          title="Successes & fails."
          description="Shiny demos are cheap. The friction is the story. Toggle each card to see what broke — and what it taught."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-6 md:grid-rows-2">
          <ProjectCard project={projects[0]} className="md:col-span-4" />
          <ProjectCard project={projects[1]} className="md:col-span-2" />
          <ProjectCard project={projects[2]} className="md:col-span-2" />
          <ProjectCard project={projects[3]} className="md:col-span-4" />
        </div>
      </div>
    </section>
  );
}
