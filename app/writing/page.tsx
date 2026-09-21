import Link from "next/link";
import { posts } from "@/lib/case-studies";

export default function WritingIndex() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
        Writing
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-neutral-900">Notes</h1>
      <ul className="mt-10 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/writing/${post.slug}`} className="group block">
              <p className="font-mono text-xs text-muted">{post.date}</p>
              <h2 className="mt-1 text-2xl font-semibold group-hover:underline">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
