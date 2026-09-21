import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-neutral-900">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-muted">
        That route is not on {siteConfig.name}’s site.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white"
      >
        Back home
      </Link>
    </main>
  );
}
