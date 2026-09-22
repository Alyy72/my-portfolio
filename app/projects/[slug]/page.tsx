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
  return {
    title: `${study.title} | Arafat Sulaiman`,
    description: study.summary,
  };
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

      <section className="mt-10">
        <h2 className="text-base font-semibold text-neutral-900">Architecture</h2>
        <ArchitectureExplorer nodes={study.architecture} />
      </section>

      <section className="mt-10">
        <h2 className="text-base font-semibold text-neutral-900">Results</h2>
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
            Screenshots
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {study.screenshots.map((shot) => (
              <figure key={shot.src} className="overflow-hidden rounded-2xl border border-black/10">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="h-48 w-full object-cover"
                />
                <figcaption className="p-3 text-xs text-muted">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : (
        <p className="mt-10 text-sm text-muted">
          Product screenshots are not published here. Use the live demo.
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
            <span className="rounded-full border border-black/15 px-4 py-2 text-sm">
              No public demo — walkthrough available
            </span>
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
