export const siteConfig = {
  name: "Arafat Sulaiman",
  brand: "arafat.dev",
  title: "Full-Stack Developer",
  location: "Dubai, UAE",
  email: "arafatalyy.it@gmail.com",
  whatsapp: "https://wa.me/971529033466",
  whatsappDisplay: "+971529033466",
  resumeUrl: "/resume.pdf",
  profileImage: "/images/profile.jpg",
  siteUrl: "https://arafat.dev",
  socials: {
    linkedin: "https://www.linkedin.com/in/arafat-sulaiman-60066636a",
    github: "https://github.com/Alyy72",
    whatsapp: "https://wa.me/971529033466",
    credly: "https://www.credly.com/users/arafat-sulaiman-m",
    instagram: "https://www.instagram.com/alyy.77?igsh=MXRtaTZrZzEyM2ducQ==",
  },
  rotatingRoles: [
    "Full-Stack Developer",
    "System Developer",
    "Web Engineer",
    "E-Commerce Specialist",
  ],
  seoRoles: [
    "Full-Stack Developer",
    "System Developer",
    "Web Engineer",
    "E-Commerce Specialist",
  ],
  techBadges: ["TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  hook: {
    eyebrow: "Stop scrolling.",
    line: "I didn't wait for a degree to ship real products.",
    sub: "While others were still drafting portfolios, I was deploying live storefronts, ops systems, and payment flows for real businesses — from Dubai to the field.",
  },
  summary:
    "I build responsive web apps, clean codebases, and elegant digital experiences — from e-commerce storefronts to internal business systems.",
  about:
    "I'm a Full-Stack Developer based in Dubai, UAE. I design and ship web applications, e-commerce platforms, and internal business tools with a focus on performance, clarity, and production-ready delivery.",
};

export const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arafat-sulaiman-60066636a",
    color:
      "text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Alyy72",
    color:
      "text-slate-200 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/971529033466",
    color:
      "text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
  },
  {
    id: "credly",
    label: "Credly",
    href: "https://www.credly.com/users/arafat-sulaiman-m",
    color:
      "text-amber-400 hover:border-amber-500/50 hover:bg-amber-500/10 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/alyy.77?igsh=MXRtaTZrZzEyM2ducQ==",
    color:
      "text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.25)]",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:arafatalyy.it@gmail.com",
    color:
      "text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]",
  },
] as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
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
      "Building search-optimized web applications with structured JSON-LD schemas, Google Analytics 4 integration, and instant Cloudflare Pages edge deployments.",
    stack: [
      "Cloudflare Pages",
      "GA4 Analytics",
      "SEO / JSON-LD",
      "Google APIs",
      "Open Graph",
    ],
    features: [
      "JSON-LD + Open Graph structured data for SERP richness",
      "GA4 event and traffic instrumentation",
      "Cloudflare Pages CI/CD edge deploy pipelines",
      "Search-indexed page architecture",
      "Google Workspace / API automation hooks",
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
      "Animated KPI rings and metric tiles",
      "Interactive bar/line chart surfaces",
      "Presentation control bars for live decks",
      "Motion-driven storytelling interfaces",
      "Executive-ready glassmorphic layouts",
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

export const experience = [
  {
    id: "tia-daamc",
    title: "TIA Tier 1 IT Support Intern",
    company: "DAAMC",
    duration: "6 Months",
    highlights: [
      "Provided Tier 1 technical support, hardware/software troubleshooting, and network access management across the organization.",
      "Resolved end-user tickets efficiently, maintaining high satisfaction and minimal system downtime.",
    ],
  },
  {
    id: "mantra-helpdesk",
    title: "Customer Service / Help Desk Specialist",
    company: "Mantra",
    duration: "20 Months",
    highlights: [
      "Delivered high-quality front-line support and customer service, diagnosing user issues and escalating complex technical tickets.",
      "Streamlined help desk operations and communication workflows to ensure rapid response times.",
    ],
  },
] as const;

export const stats = [
  { label: "Total Projects", value: 4 },
  { label: "Certificates", value: 5 },
  { label: "Completed Works", value: 3 },
] as const;

export const projects = [
  {
    id: "golden-vanilla-web",
    title: "Golden Vanilla Website",
    description:
      "High-conversion marketing site for Golden Vanilla with payments, SEO, and AI-assisted content.",
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
      "Gallery-grade bilingual storefront for luxury jewelry and beauty products.",
    liveUrl: "https://www.ikramcollection.com",
    githubUrl: "https://github.com/Alyy72",
    stack: ["React", "Tailwind CSS", "Cursor AI"],
    features: [
      "Bilingual storefront experience",
      "Gallery-grade product presentation",
      "Agentic build workflow with Cursor AI",
    ],
  },
] as const;

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
