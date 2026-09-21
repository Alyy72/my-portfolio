import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const keywords = [
  "Arafat Sulaiman",
  "Full-Stack Developer Dubai",
  "Next.js Developer UAE",
  "AlyyConnect",
  "Cloudflare",
  "E-commerce",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Arafat Sulaiman | Full-Stack Developer (Dubai, UAE)",
  description:
    "Arafat Sulaiman is a Full-Stack Developer based in Dubai, UAE. I build production web systems — storefronts, payment flows, and operations tools — on Next.js and Cloudflare.",
  keywords,
  authors: [{ name: "Arafat Sulaiman" }],
  creator: "AlyyConnect",
  openGraph: {
    title: "Arafat Sulaiman | Full-Stack Developer",
    description:
      "Production web systems for real businesses — storefronts, payment flows, and operations tools, shipped on Cloudflare.",
    url: siteConfig.siteUrl,
    siteName: "Arafat Sulaiman Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.profileImage,
        width: 796,
        height: 894,
        alt: "Arafat Sulaiman — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arafat Sulaiman | Full-Stack Developer",
    description:
      "Production web systems for real businesses — storefronts, payment flows, and operations tools, shipped on Cloudflare.",
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arafat Sulaiman",
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}${siteConfig.profileImage}`,
  jobTitle: "Full-Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "AlyyConnect",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  email: siteConfig.email,
  sameAs: [
    siteConfig.socials.linkedin,
    siteConfig.socials.github,
    siteConfig.socials.credly,
    siteConfig.socials.instagram,
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Cloudflare",
    "AI APIs",
    "E-Commerce",
    "Business Management Systems",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
