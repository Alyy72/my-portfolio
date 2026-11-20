import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/projects", "Selected work", "Websites, storefronts, and business tools built by Arafat Sulaiman.");

import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig, zahaRideReplayUrl } from "@/lib/site-data";

const cardClassName = "block rounded-3xl border border-black/10 bg-white/70 p-5 transition hover:border-black/20";

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
        Explore the problem, approach, and available evidence behind each project.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {caseStudies.map((study) => {
          const isZaha = study.slug === "zaha";
          const caseStudyLink = (
            <Link
              href={`/projects/${study.slug}`}
              className={isZaha ? "block" : cardClassName}
            >
              <h2 className="text-xl font-semibold text-neutral-900">
                {study.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{study.summary}</p>
            </Link>
          );
          return (
            <li key={study.slug}>
              {isZaha ? (
                <div className={cardClassName}>
                  {caseStudyLink}
                  <Link
                    href={zahaRideReplayUrl}
                    className="mt-3 inline-block text-sm font-medium text-[#004741] underline-offset-2 hover:underline"
                  >
                    Try Ride Replay
                  </Link>
                </div>
              ) : caseStudyLink}
            </li>
          );
        })}
      </ul>
      <p className="mt-10 text-sm text-muted">
        <Link href="/#portfolio" className="underline">
          Back to {siteConfig.name}
        </Link>
      </p>
    </main>
  );
}
