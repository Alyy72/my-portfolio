import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { ArchitectureExplorer } from "@/components/ArchitectureExplorer";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata(`/projects/${study.slug}`, study.title, study.summary);
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article id="main" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-700">
        Case study
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
        {study.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{study.summary}</p>

      <section className="mt-10 space-y-6 text-sm leading-relaxed text-neutral-700">
        <div>
          <h2 className="text-base font-semibold text-neutral-900">Client / context</h2>
          <p className="mt-1">{study.client}</p>
        </div>
        {study.problem ? (
          <div>
            <h2 className="text-base font-semibold text-neutral-900">Problem</h2>
            <p className="mt-1">{study.problem}</p>
          </div>
        ) : null}
        <div>
          <h2 className="text-base font-semibold text-neutral-900">Solution</h2>
          <p className="mt-1">{study.solution}</p>
        </div>
        {study.role ? (
          <div>
            <h2 className="text-base font-semibold text-neutral-900">My role</h2>
            <p className="mt-1">{study.role}</p>
          </div>
        ) : null}
      </section>

      {study.story ? (
        <section className="mt-10" aria-labelledby="project-story-title">
          <h2 id="project-story-title" className="text-2xl font-semibold text-neutral-900">{study.story.title}</h2>
          <h3 className="mt-6 text-lg font-semibold">The challenge</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{study.story.challenge}</p>
          <h3 className="mt-6 text-lg font-semibold">My decisions</h3>
          <ol className="mt-4 grid gap-4 sm:grid-cols-2">
            {study.story.decisions.map((decision, index) => (
              <li key={decision.title} className="rounded-2xl border border-black/10 bg-white/70 p-5">
                <span className="font-mono text-xs text-[#004741]">0{index + 1}</span>
                <h4 className="mt-2 font-semibold">{decision.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{decision.detail}</p>
              </li>
            ))}
          </ol>
          <h3 className="mt-6 text-lg font-semibold">What shipped</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{study.story.outcome}</p>
        </section>
      ) : null}

      {study.walkthrough ? (
        <section className="mt-10" aria-labelledby="walkthrough-title">
          <h2 id="walkthrough-title" className="text-xl font-semibold text-neutral-900">Inside the project</h2>
          <ol className="mt-4 space-y-3">
            {study.walkthrough.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-black/10 bg-white/70 p-5">
                <p className="font-mono text-xs text-[#004741]">0{index + 1}</p>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="text-base font-semibold text-neutral-900">Architecture</h2>
        <ArchitectureExplorer nodes={study.architecture} />
      </section>

      <section className="mt-10">
        <h2 className="text-base font-semibold text-neutral-900">Project evidence</h2>
        {study.evidenceNote ? <p className="mt-3 text-sm leading-relaxed text-muted">{study.evidenceNote}</p> : null}
        <ul className="mt-3 space-y-3">
          {study.results.map((result) => (
            <li
              key={result.label}
              className="rounded-2xl border border-black/10 bg-white/70 p-4"
            >
              <p className="text-xs uppercase tracking-wider text-muted">
                {result.label} · {result.date}
              </p>
              <p className="mt-1 text-2xl font-semibold text-neutral-900">
                {result.value}
              </p>
              <p className="mt-1 text-xs text-muted">{result.source}</p>
            </li>
          ))}
        </ul>
      </section>

      {study.screenshots.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-base font-semibold text-neutral-900">
            {study.galleryKind === "interface" ? "Website screenshots" : "Project imagery"}
          </h2>
          <div className={study.galleryKind === "interface" ? "mt-4 grid gap-6" : "mt-4 grid gap-4 sm:grid-cols-2"}>
            {study.screenshots.map((shot) => (
              <figure key={shot.src} className={`overflow-hidden rounded-2xl border border-black/10 ${shot.width && shot.height && shot.height > shot.width * 1.6 ? "mx-auto w-full max-w-sm" : ""}`}>
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  width={shot.width}
                  height={shot.height}
                  className={study.galleryKind === "interface" ? "h-auto w-full" : "h-48 w-full object-cover"}
                />
                <figcaption className="p-3 text-xs text-muted">
                  {shot.caption}
                  {study.galleryKind === "interface" ? (
                    <a href={shot.src} target="_blank" rel="noopener noreferrer" className="mt-2 block underline underline-offset-4" aria-label={`View full-size image: ${shot.alt} (opens in a new tab)`}>View full-size screenshot ↗</a>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : (
        <p className="mt-10 text-sm text-muted">
          {study.liveUrl ? "Product screenshots are not published here. Explore the live demo." : "This private application is available to discuss through a walkthrough. Customer screens are not published here."}
        </p>
      )}

      <section className="mt-10">
        <h2 className="text-base font-semibold text-neutral-900">Links</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          {study.liveUrl ? (
            <a
              href={study.liveUrl}
              className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          ) : (
            <Link href="/#contact" className="rounded-full border border-black/15 px-4 py-2 text-sm underline">
              Request a walkthrough
            </Link>
          )}
          <span className="rounded-full border border-black/15 px-4 py-2 text-sm text-muted">
            {study.repoNote}
          </span>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-base font-semibold text-neutral-900">Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {study.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <p className="mt-12 text-sm">
        <Link href="/projects" className="underline">
          All case studies
        </Link>
        {" · "}
        <Link href="/#contact" className="underline">
          Start a project
        </Link>
      </p>
    </article>
  );
}
