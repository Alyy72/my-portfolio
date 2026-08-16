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
  "Arafat Sulaiman Developer",
  "System Developer Dubai",
  "Full Stack Developer Dubai",
  "Next.js Developer UAE",
  "AlyyConnect",
  "E-Commerce Developer Dubai",
  "Golden Vanilla System",
  "AI API Developer Dubai",
  "Web Engineer Dubai",
  "Full-Stack Developer Dubai",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Arafat Sulaiman | Full-Stack & System Developer (Dubai, UAE)",
  description:
    "Arafat Sulaiman is a Full-Stack Web Developer and System Developer based in Dubai, UAE. Specializing in Next.js, Cloudflare, AI APIs, E-Commerce, and custom business management systems.",
  keywords,
  authors: [{ name: "Arafat Sulaiman" }],
  creator: "AlyyConnect",
  openGraph: {
    title: "Arafat Sulaiman | Full-Stack & System Developer",
    description:
      "Custom web applications, AI tools, and high-performance e-commerce platforms.",
    url: siteConfig.siteUrl,
    siteName: "Arafat Sulaiman Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.profileImage,
        width: 796,
        height: 894,
        alt: "Arafat Sulaiman — Full-Stack & System Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arafat Sulaiman | Full-Stack & System Developer",
    description:
      "Custom web applications, AI tools, and high-performance e-commerce platforms.",
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
  jobTitle: [
    "Full-Stack Developer",
    "System Developer",
    "Web Engineer",
    "E-Commerce Specialist",
  ],
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
