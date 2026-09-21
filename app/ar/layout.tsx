import type { ReactNode } from "react";
import type { Metadata } from "next";
import { SubpageChrome } from "@/components/SubpageChrome";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "عرفات سليمان | مطوّر Full-Stack",
  description:
    "عرفات سليمان، مطوّر Full-Stack في دبي. أبني متاجر وأنظمة تشغيل على Next.js وCloudflare.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/ar`,
    languages: {
      ar: `${siteConfig.siteUrl}/ar`,
      en: siteConfig.siteUrl,
    },
  },
  openGraph: {
    locale: "ar_AE",
    url: `${siteConfig.siteUrl}/ar`,
  },
};

export default function ArabicLayout({ children }: { children: ReactNode }) {
  return <SubpageChrome>{children}</SubpageChrome>;
}
