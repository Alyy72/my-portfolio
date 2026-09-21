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

export const engineeringWork = [
  {
    id: "zaha",
    title: "ZAHA — Cycling Telemetry & Navigation System",
    tag: "Hardware & Software Architecture",
    highlights: [
      "Engineered a hardware-integrated cycling ecosystem featuring heads-up navigation and real-time sensor data parsing.",
      "Architected the software environment and established BLE GATT specifications for seamless microcontroller communication.",
    ],
  },
  {
    id: "himba-coffee",
    title: "HIMBA Coffee — Interactive E-Commerce Platform",
    tag: "Full-Stack Web Development",
    highlights: [
      "Developed a dynamic web catalog and interactive storefront using Next.js.",
      "Built a custom product configurator allowing users to manipulate real-time color customizations for travel tumblers.",
    ],
  },
  {
    id: "ikram-haute-joaillerie",
    title: "IKRAM Haute Joaillerie — Digital Showcase",
    tag: "Performance & Edge Deployment",
    highlights: [
      "Engineered a high-performance digital showcase prioritizing fast load times and clean UI architecture.",
      "Configured application files and managed edge deployments utilizing Cloudflare Pages for global scalability.",
    ],
  },
  {
    id: "notension",
    title: "NOTENSION — E-Commerce Web Portal",
    tag: "Systems & UI Design",
    highlights: [
      "Formulated the application architecture and engineered an interactive web storefront optimized for apparel retail.",
    ],
  },
] as const;

export const stats = [
  { label: "Total Projects", value: 5 },
  { label: "Certificates", value: 5 },
  { label: "Completed Works", value: 4 },
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
      "Production-ready live demo",
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
