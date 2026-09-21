import { SITE_URL } from "./case-studies";

export const siteConfig = {
  // TODO(owner): legal / public name — site uses Arafat Sulaiman; CV and one
  // certificate PDF use Arafat Sulaiman Nawanda; Credly is arafat-sulaiman-m.
  name: "Arafat Sulaiman",
  brand: "arafat.dev",
  title: "Full-Stack Developer",
  location: "Dubai, UAE",
  email: "arafatalyy.it@gmail.com",
  whatsapp: "https://wa.me/971529033466",
  whatsappDisplay: "+971529033466",
  // TODO(owner): CV rewrite decision — dated PDF is IT Support / L1 Helpdesk
  // and does not match this site's title, projects, or credentials. Replace
  // the file or remove the download until it does. Do not invent a CV.
  resumeUrl: "/Arafat-Sulaiman-CV-2026-09.pdf",
  profileImage: "/images/profile.webp",
  siteUrl: SITE_URL,
  socials: {
    linkedin: "https://www.linkedin.com/in/arafat-sulaiman-60066636a",
    github: "https://github.com/Alyy72",
    whatsapp: "https://wa.me/971529033466",
    credly: "https://www.credly.com/users/arafat-sulaiman-m",
    instagram: "https://www.instagram.com/alyy.77?igsh=MXRtaTZrZzEyM2ducQ==",
  },
  rotatingRoles: [
    "TypeScript",
    "Next.js",
    "Cloudflare",
    "React.js",
  ],
  skillTags: ["TypeScript", "React.js", "Next.js", "Cloudflare"],
  techBadges: ["TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  hook: {
    eyebrow: "Dubai · Cloudflare",
    line: "I build production web systems for real businesses.",
    sub: "Storefronts, payment flows and operations tools, live in Dubai and shipped on Cloudflare.",
  },
  summary:
    "I build web apps, storefronts, and internal business systems — Next.js, React, and Cloudflare.",
  about:
    "I'm a Full-Stack Developer based in Dubai, UAE. I design and ship web applications, e-commerce platforms, and internal business tools with a focus on performance, clarity, and reliable delivery.",
};

export const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arafat-sulaiman-60066636a",
    color: "text-blue-600 hover:border-blue-600/40 hover:bg-blue-600/10",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Alyy72",
    color: "text-neutral-800 hover:border-black/30 hover:bg-black/[0.06]",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/971529033466",
    color:
      "text-emerald-600 hover:border-emerald-600/40 hover:bg-emerald-600/10",
  },
  {
    id: "credly",
    label: "Credly",
    href: "https://www.credly.com/users/arafat-sulaiman-m",
    color: "text-amber-600 hover:border-amber-600/40 hover:bg-amber-600/10",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/alyy.77?igsh=MXRtaTZrZzEyM2ducQ==",
    color: "text-pink-600 hover:border-pink-600/40 hover:bg-pink-600/10",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:arafatalyy.it@gmail.com",
    color: "text-neutral-700 hover:border-black/30 hover:bg-black/[0.06]",
  },
] as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
] as const;

export const pageLinks = [
  { href: "/projects", label: "Case studies" },
  { href: "/writing", label: "Writing" },
  { href: "/lab", label: "Lab" },
  { href: "/ar", label: "العربية" },
] as const;

export const capabilities = [
  {
    id: "ai-apis",
    title: "Custom AI APIs & Agent Integration",
    description:
      "Engineering custom REST endpoints, function-calling schemas, and autonomous webhooks that allow AI models to interact directly with web platforms.",
    stack: [
      "Next.js",
      "REST APIs",
      "Claude API",
      "Gemini API",
      "Cloudflare Workers",
      "JSON-LD",
    ],
    features: [
      "Function-calling schemas for tool-using agents",
      "Webhook bridges between models and live platforms",
      "Secure REST endpoints with status telemetry",
      "Claude + Gemini dual-provider orchestration",
      "Edge workers for low-latency inference routes",
    ],
    mockup: "ai" as const,
  },
  {
    id: "google-cloud",
    title: "Google Pages, SEO & Cloud Infrastructure",
    description:
      // TODO(owner): analytics decision — supply a GA4 measurement ID, or
      // confirm analytics stays off. Do not add a fake ID. Cookie copy already
      // says nothing fires until an ID exists.
      "Search-oriented sites with JSON-LD, Open Graph, and Cloudflare Pages deploys. This portfolio does not fire GA4 until an ID is configured.",
    stack: [
      "Cloudflare Pages",
      "SEO / JSON-LD",
      "Open Graph",
    ],
    features: [
      "JSON-LD + Open Graph structured data",
      "Cloudflare Pages CI/CD edge deploy pipelines",
      "Search-indexed page architecture",
      "Optional GA4 only when a measurement ID exists",
    ],
    mockup: "seo" as const,
  },
  {
    id: "dashboards",
    title: "Interactive Visual Decks & Custom Dashboards",
    description:
      "Designing responsive web-based presentation decks, executive dashboards, and interactive visual interfaces built with React and Framer Motion.",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts / SVG",
      "UI/UX",
    ],
    features: [
      "KPI rings and metric tiles (sample data in mockups)",
      "Bar/line chart surfaces",
      "Presentation control bars for live decks",
      "Motion-driven storytelling interfaces",
      "Light glass panels on Sand (#F0EDE4)",
    ],
    mockup: "dashboard" as const,
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Apps & Management Systems",
    description:
      "Developing custom e-commerce storefronts and operational management platforms featuring built-in CRMs, automated invoicing, and instant lead routing.",
    stack: [
      "React.js",
      "Next.js",
      "Ziina Payments",
      "CRM Logic",
      "Inventory Tracker",
    ],
    features: [
      "E-commerce checkout with Ziina payment links",
      "WhatsApp lead redirection flows",
      "PIN-secured ops dashboards",
      "CRM + inventory tracking modules",
      "Automated invoicing pipelines",
    ],
    mockup: "commerce" as const,
  },
] as const;

export const engineeringWork = [
  {
    id: "zaha",
    slug: "zaha",
    title: "ZAHA — Cycling Telemetry & Navigation System",
    tag: "Hardware & Software Architecture",
    highlights: [
      "Heads-up navigation and real-time sensor parsing on a cycling head unit.",
      "BLE GATT service/characteristic spec for microcontroller communication.",
    ],
  },
  {
    id: "himba-coffee",
    slug: "himba-coffee",
    title: "HIMBA Coffee — Interactive E-Commerce Platform",
    tag: "Full-Stack Web Development",
    highlights: [
      "Next.js catalog and storefront for travel tumblers and coffee.",
      "Client-side color configurator that updates tumbler colorways live.",
    ],
  },
  {
    id: "ikram-haute-joaillerie",
    slug: "ikram-collection",
    title: "IKRAM Haute Joaillerie — Digital Showcase",
    tag: "Performance & Edge Deployment",
    highlights: [
      "Built a bilingual jewelry storefront (React + Tailwind) at ikramcollection.com.",
      "Deployed on Cloudflare Pages; measured TTFB 0.58 s on 21 Sep 2026.",
    ],
  },
  {
    // TODO(owner): NOTENSION — add a case study + evidence, or drop this card
    // so project counts match. No public demo on this site today.
    id: "notension",
    slug: null,
    title: "NOTENSION — E-Commerce Web Portal",
    tag: "Systems & UI Design",
    highlights: [
      "Apparel storefront architecture and interactive product UI. No public demo on this site.",
    ],
  },
] as const;

export const projects = [
  {
    id: "golden-vanilla-web",
    title: "Golden Vanilla Website",
    description:
      "Marketing site for Golden Vanilla with WhatsApp leads, Ziina payment links, and JSON-LD.",
    liveUrl: "https://goldenvanilla-ae.com/",
    githubUrl: "https://github.com/Alyy72",
    stack: [
      "Static HTML",
      "Cloudflare Pages",
      "GitHub CI/CD",
      "GA4",
      "Ziina",
      "Opinly AI",
      "JSON-LD SEO",
    ],
    features: [
      "Cloudflare Pages deployment with GitHub CI/CD",
      "WhatsApp lead redirection",
      "Ziina payment link integration",
      "Open Graph / JSON-LD SEO structure",
      "Blog automation via Opinly AI",
    ],
  },
  {
    id: "golden-vanilla-system",
    title: "Golden Vanilla System",
    description:
      "Operations management app with CRM, invoicing, inventory, and an embedded Claude assistant.",
    liveUrl: null,
    githubUrl: "https://github.com/Alyy72",
    stack: ["React.js", "Tailwind CSS", "CRM", "Claude AI API", "Inventory"],
    features: [
      "PIN security login",
      "Lead / client CRM tracking",
      "Automated invoicing",
      "Inventory tracking",
      "Floating Claude assistant for ops aid",
    ],
  },
  {
    id: "himba-coffee",
    title: "HIMBA COFFEE",
    description:
      "Custom e-commerce experience for a travel tumbler and specialty coffee brand.",
    liveUrl: "https://himba-coffee-live.pages.dev",
    githubUrl: "https://github.com/Alyy72",
    stack: ["Next.js", "Tailwind CSS", "Cloudflare"],
    features: [
      "Custom storefront UX",
      "Fast checkout-oriented flows",
      "Mobile-first product presentation",
    ],
  },
  {
    id: "ikram-collection",
    title: "IKram Collection",
    description:
      "Bilingual jewelry and beauty storefront with gallery product layouts.",
    liveUrl: "https://www.ikramcollection.com",
    githubUrl: "https://github.com/Alyy72",
    stack: ["React", "Tailwind CSS", "Cursor AI"],
    features: [
      "Bilingual storefront experience",
      "Gallery-grade product presentation",
      "Agentic build workflow with Cursor AI",
    ],
  },
  {
    id: "mihbash-cafe",
    title: "Mihbash Cafe",
    description:
      "Live cafe web experience for Mihbash — menu-driven branding, mobile-first UX, and Cloudflare Workers edge delivery.",
    liveUrl: "https://mihbash-cafe.alyyconnect.workers.dev",
    githubUrl: "https://github.com/Alyy72",
    stack: ["Cloudflare Workers", "Web UI", "Edge Deploy", "AlyyConnect"],
    features: [
      "Deployed on Cloudflare Workers via AlyyConnect",
      "Cafe-focused digital presence and menu presentation",
      "Fast edge delivery for mobile visitors",
      "Live demo on Cloudflare Workers",
    ],
  },
] as const;

// TODO(owner): credential verification links — unique Credly/issuer badge
// URLs per credential. A+, ITIL 4, Google IT Support, Diploma stay off this
// site until a file or badge exists. Do not invent them.
export const certificates = [
  {
    id: "cyber-threat-management",
    title: "Cyber Threat Management",
    issuer: "Cisco / Networking Academy",
    href: "https://www.credly.com/users/arafat-sulaiman-m",
    pdf: "/certificates/cyber-threat-management.pdf",
  },
  {
    id: "comptia-security",
    title: "CompTIA Security+",
    issuer: "CompTIA",
    href: "https://www.credly.com/users/arafat-sulaiman-m",
    pdf: "/certificates/comptia-security.pdf",
  },
  {
    id: "intro-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    href: "https://www.credly.com/users/arafat-sulaiman-m",
    pdf: "/certificates/introduction-to-cybersecurity.pdf",
  },
  {
    id: "networking-basics",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    href: "https://www.credly.com/users/arafat-sulaiman-m",
    pdf: "/certificates/networking-basics.pdf",
  },
  {
    id: "credly-profile",
    title: "Credly Profile",
    issuer: "All verified badges",
    href: "https://www.credly.com/users/arafat-sulaiman-m",
    pdf: null,
  },
] as const;

export const stats = [
  { label: "Total Projects", value: projects.length },
  {
    label: "Certificates",
    value: certificates.filter((item) => item.pdf).length,
  },
  {
    label: "Live demos",
    value: projects.filter((item) => item.liveUrl).length,
  },
] as const;

export const techStack = [
  { name: "TypeScript", icon: "FileCode2" },
  { name: "React.js", icon: "Atom" },
  { name: "Next.js", icon: "Layers" },
  { name: "Tailwind CSS", icon: "Wind" },
  { name: "HTML5", icon: "Code2" },
  { name: "CSS3", icon: "Palette" },
  { name: "JavaScript", icon: "Braces" },
  { name: "Node.js", icon: "Server" },
  { name: "Cloudflare", icon: "Cloud" },
  { name: "Git / GitHub", icon: "GitBranch" },
  { name: "Claude API", icon: "Sparkles" },
] as const;
