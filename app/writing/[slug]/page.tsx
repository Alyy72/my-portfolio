import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/case-studies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Arafat Sulaiman`, description: post.excerpt };
}

export default async function WritingPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article id="main" className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <p className="font-mono text-xs text-muted">{post.date}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
        {post.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
      <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-700">
        {post.body.split("\n\n").map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
      <p className="mt-12 text-sm">
        <Link href="/writing" className="underline">
          All notes
        </Link>
      </p>
    </article>
  );
}
