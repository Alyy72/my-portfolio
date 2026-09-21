import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-data";

export default function ProjectIndexPage() {
  return (
    <main id="main" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-700">
        Case studies
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
        Selected work
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Each page is a full case study. Metrics are measured, not invented.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <Link
              href={`/projects/${study.slug}`}
              className="block rounded-3xl border border-black/10 bg-white/70 p-5 transition hover:border-black/20"
            >
              <h2 className="text-xl font-semibold text-neutral-900">
                {study.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{study.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm text-muted">
        <Link href="/#portfolio" className="underline">
          Back to {siteConfig.name}
        </Link>
      </p>
    </main>
  );
}
