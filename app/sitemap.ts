import type { MetadataRoute } from "next";
import { SITE_URL, caseStudies, posts } from "@/lib/case-studies";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-09-21");
  return [
    { url: SITE_URL, lastModified: now },
    { url: `${SITE_URL}/ar`, lastModified: now },
    { url: `${SITE_URL}/projects`, lastModified: now },
    { url: `${SITE_URL}/writing`, lastModified: now },
    { url: `${SITE_URL}/lab`, lastModified: now },
    ...caseStudies.map((study) => ({
      url: `${SITE_URL}/projects/${study.slug}`,
      lastModified:
        study.slug === "barista-seed-to-cup" || study.slug === "slick-barista"
          ? new Date("2026-09-22")
          : now,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/writing/${post.slug}`,
      lastModified: now,
    })),
  ];
}
