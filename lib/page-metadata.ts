import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: { canonical: url, languages: {} },
    openGraph: {
      title, description, url, type: "website",
      images: [{ url: siteConfig.profileImage, alt: siteConfig.name }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
