// TODO(owner): canonical domain decision — keep workers.dev, or connect a
// custom domain and 301 the Worker URL. Do not invent a live hostname.
export const SITE_URL = "https://my-portfolio.alyyconnect.workers.dev";

// TODO(owner): real metrics per project, with dates, beyond this TTFB spot-check.
// Do not invent orders, conversion, hours saved, or Lighthouse scores.
export const measuredOn = "21 Sep 2026";

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  client: string;
  walkthrough?: { title: string; detail: string }[];
  evidenceNote?: string;
  problem: string;
  solution: string;
  role: string;
  results: { label: string; value: string; date: string; source: string }[];
  screenshots: { src: string; alt: string; caption: string }[];
  liveUrl: string | null;
  repoUrl: string | null;
  repoNote: string;
  stack: string[];
  architecture: { id: string; label: string; detail: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "golden-vanilla-web",
    title: "Golden Vanilla Website",
    summary:
      "Marketing site for a Dubai vanilla brand with WhatsApp lead capture, Ziina payment links, and structured SEO.",
    client: "Golden Vanilla (Dubai storefront).",
    walkthrough: [
      { title: "Understand the product", detail: "The homepage introduces the vanilla, its origin, and its intended use in home and professional kitchens." },
      { title: "Choose a buying path", detail: "Shop and pricing links serve retail visitors, while a separate sample-request section addresses chefs and venue managers." },
      { title: "Start an enquiry", detail: "Visitors can use the sample form or follow the WhatsApp link. Form delivery and payment completion are not independently verified in this review." },
    ],
    evidenceNote: "Public homepage reviewed on 16 October 2026. The visible shopping links and sample-request interface demonstrate the customer journey; they do not establish sales or conversion results. Earlier timing checks below are historical snapshots, not a current performance guarantee.",
    problem:
      "The brand needed a public site that could take enquiries and payments without a heavy commerce stack.",
    solution:
      "A static HTML site on Cloudflare Pages with GitHub CI/CD, JSON-LD, Open Graph, WhatsApp redirection, and Ziina payment links. Blog copy is assisted by Opinly AI.",
    role: "Built end to end using AI-assisted development, including the storefront, site structure, and deployment.",
    results: [
      {
        label: "Live TTFB",
        value: "0.56 s",
        date: measuredOn,
        source: "curl -w time_starttransfer against https://goldenvanilla-ae.com/",
      },
      {
        label: "HTML payload",
        value: "13 KB",
        date: measuredOn,
        source: "curl size_download of the document",
      },
    ],
    screenshots: [
      {
        src: "/photos/vanilla-pods.webp",
        alt: "Vanilla pods used in Golden Vanilla branding",
        caption: "Brand photography used across the storefront.",
      },
      {
        src: "/photos/vanilla-farm.webp",
        alt: "Vanilla farm context for Golden Vanilla",
        caption: "Origin story imagery on the marketing site.",
      },
    ],
    liveUrl: "https://goldenvanilla-ae.com/",
    // TODO(owner): repository link or approved walkthrough recording — do not
    // point githubUrl at the profile as if it were the project repo.
    repoUrl: null,
    repoNote: "Private repository — walkthrough available.",
    stack: ["Static HTML", "Cloudflare Pages", "GitHub CI/CD", "Ziina", "JSON-LD", "WhatsApp"],
    architecture: [
      { id: "client", label: "Browser", detail: "Static HTML/CSS/JS from Pages." },
      { id: "edge", label: "Cloudflare Pages", detail: "Global CDN and HTTPS." },
      { id: "pay", label: "Ziina", detail: "Payment links, not a custom processor." },
      { id: "lead", label: "WhatsApp", detail: "Enquiry CTA opens a prefilled chat." },
    ],
  },
  {
    slug: "golden-vanilla-system",
    title: "Golden Vanilla System",
    summary:
      "Internal operations app for CRM, invoicing, inventory, and an embedded Claude assistant.",
    client: "Golden Vanilla operations (internal, not public).",
    walkthrough: [
      { title: "Bring operations together", detail: "The documented scope groups lead records, invoicing, and stock management in one interface." },
      { title: "Support daily work", detail: "An embedded Claude assistant provides an additional interface for operations questions. Its presence does not establish answer accuracy or autonomous decision-making." },
      { title: "Review privately", detail: "Request a walkthrough using sample records to discuss the application without publishing customer information." },
    ],
    evidenceNote: "This is a private project. Public screenshots, independently verified usage figures, and measured time savings are not available here. Access controls and production security require their own review.",
    problem:
      "Leads, invoices, and stock lived in disconnected tools, so day-to-day ops needed a single PIN-gated surface.",
    solution:
      "A React + Tailwind app with PIN login, CRM records, invoicing, inventory, and a floating Claude assistant for ops questions. No public URL — customer data stays off the open web.",
    role: "Built end to end using AI-assisted development, including the operations interface, CRM, invoicing, inventory flows, and assistant integration.",
    results: [
      {
        label: "Public exposure",
        value: "None — internal app",
        date: measuredOn,
        source: "No public hostname; demo is screenshot/walkthrough only",
      },
    ],
    screenshots: [],
    liveUrl: null,
    repoUrl: null,
    repoNote: "Private repository — walkthrough available.",
    stack: ["React.js", "Tailwind CSS", "CRM", "Claude API", "Inventory"],
    architecture: [
      { id: "ui", label: "React app", detail: "PIN-gated ops dashboard." },
      { id: "data", label: "Ops records", detail: "Leads, invoices, inventory — not on this site." },
      { id: "ai", label: "Claude API", detail: "In-app assistant for ops questions." },
    ],
  },
  {
    slug: "himba-coffee",
    title: "HIMBA Coffee",
    summary:
      "Next.js storefront with a real-time color configurator for travel tumblers and specialty coffee.",
    client: "HIMBA Coffee brand (public Pages demo).",
    walkthrough: [
      { title: "Explore the storefront", detail: "The project combines specialty coffee branding with a customizable travel-tumbler experience." },
      { title: "Preview a colorway", detail: "Choose a design category and tumbler variant, then enter an optional engraving. The live configurator exposes the selected variant and a 16-character engraving limit." },
      { title: "Discuss the implementation", detail: "The WhatsApp order link includes the chosen variant, engraving, and displayed price. On 16 October 2026, selecting Ocean Blue Leopard and entering Demo correctly updated the draft. No order was sent." },
    ],
    evidenceNote: "Live configurator reviewed on 16 October 2026: variant selection and engraving propagated to the WhatsApp draft. Payment, fulfilment, sales, and conversion results were not tested. The timing check below is historical.",
    problem:
      "The product is customizable; a static catalog could not show colorways live.",
    solution:
      "Next.js + Tailwind on Cloudflare, with a client-side configurator that updates tumbler colors in real time.",
    role: "Built end to end using AI-assisted development, including the storefront, tumbler configurator, and Cloudflare deployment.",
    results: [
      {
        label: "Live TTFB",
        value: "0.60 s",
        date: measuredOn,
        source: "curl -w time_starttransfer against https://himba-coffee-live.pages.dev/",
      },
    ],
    screenshots: [
      {
        src: "/photos/coffee-sapling.webp",
        alt: "Coffee plant imagery for HIMBA",
        caption: "Brand photography used on the coffee storefront.",
      },
      {
        src: "/photos/v60-pour.webp",
        alt: "Pour-over coffee, HIMBA product context",
        caption: "Product-in-use imagery for the catalog.",
      },
    ],
    liveUrl: "https://himba-coffee-live.pages.dev",
    repoUrl: null,
    repoNote: "Private repository — walkthrough available.",
    stack: ["Next.js", "Tailwind CSS", "Cloudflare Pages"],
    architecture: [
      { id: "client", label: "Next.js UI", detail: "Configurator state in the browser." },
      { id: "edge", label: "Cloudflare Pages", detail: "Static export at the edge." },
    ],
  },
  {
    slug: "ikram-collection",
    title: "IKRAM Collection",
    summary:
      "Bilingual luxury jewelry and beauty storefront on React, deployed for global visitors.",
    client: "IKRAM Collection (ikramcollection.com).",
    problem:
      "The catalog needed a bilingual presentation that stayed fast on mobile.",
    solution:
      "React + Tailwind storefront with bilingual content and Cloudflare-backed delivery.",
    role: "Engineered the storefront UI and edge deployment.",
    results: [
      {
        label: "Live TTFB",
        value: "0.58 s",
        date: measuredOn,
        source: "curl -w time_starttransfer against https://www.ikramcollection.com/",
      },
    ],
    // TODO(owner): IKRAM screenshots — desktop + mobile, no customer PII.
    screenshots: [],
    liveUrl: "https://www.ikramcollection.com",
    repoUrl: null,
    repoNote: "Private repository — walkthrough available.",
    stack: ["React", "Tailwind CSS", "Cloudflare"],
    architecture: [
      { id: "client", label: "React storefront", detail: "Bilingual product UI." },
      { id: "edge", label: "CDN / Pages", detail: "Global static delivery." },
    ],
  },
  {
    slug: "mihbash-cafe",
    title: "Mihbash Cafe",
    summary:
      "Cafe web experience with menu-led branding, deployed on Cloudflare Workers.",
    client: "Mihbash Cafe.",
    problem:
      "The cafe needed a mobile-first menu site that could be updated and served at the edge.",
    solution:
      "A Workers-hosted web UI focused on menu and brand, delivered from the AlyyConnect Workers account.",
    role: "Built the UI and deployed it to Cloudflare Workers.",
    results: [
      {
        label: "Live TTFB",
        value: "1.22 s",
        date: measuredOn,
        source: "curl -w time_starttransfer against https://mihbash-cafe.alyyconnect.workers.dev/",
      },
    ],
    screenshots: [
      {
        src: "/photos/v60-pour.webp",
        alt: "Cafe service photography",
        caption: "Hospitality context for the cafe site.",
      },
    ],
    liveUrl: "https://mihbash-cafe.alyyconnect.workers.dev",
    repoUrl: null,
    repoNote: "Private repository — walkthrough available.",
    stack: ["Cloudflare Workers", "Web UI", "Edge deploy"],
    architecture: [
      { id: "client", label: "Cafe UI", detail: "Menu-first mobile layout." },
      { id: "edge", label: "Workers", detail: "Static assets on arafat-dev’s sibling Worker." },
    ],
  },
  {
    slug: "zaha",
    title: "ZAHA — Cycling Telemetry",
    summary:
      "Hardware-integrated cycling system: heads-up navigation and BLE GATT specs for microcontroller comms.",
    client: "ZAHA cycling telemetry (hardware prototype, no public demo).",
    problem:
      "Sensor data and navigation needed a defined BLE contract between head unit and microcontroller.",
    solution:
      "Specified BLE GATT services and the software environment for real-time sensor parsing and HUD navigation. No customer data is exposed here.",
    role: "Architecture and BLE GATT specification; software environment for the head unit.",
    results: [
      {
        label: "Public demo",
        value: "None — hardware prototype",
        date: measuredOn,
        source: "No public hostname; annotated gallery only",
      },
    ],
    screenshots: [
      {
        src: "/photos/cycling-computer.webp",
        alt: "Cycling computer hardware",
        caption: "Head-unit hardware context.",
      },
      {
        src: "/photos/cycling-bike.webp",
        alt: "Bike used in ZAHA telemetry work",
        caption: "Field hardware for the telemetry system.",
      },
      {
        src: "/photos/cycling-road.webp",
        alt: "Road context for navigation",
        caption: "Navigation context for the HUD work.",
      },
    ],
    liveUrl: null,
    repoUrl: null,
    repoNote: "Private — walkthrough available.",
    stack: ["BLE GATT", "Embedded software", "Sensor parsing"],
    architecture: [
      { id: "hud", label: "Head unit", detail: "Navigation and telemetry display." },
      { id: "ble", label: "BLE GATT", detail: "Service/characteristic spec for the MCU." },
      { id: "mcu", label: "Microcontroller", detail: "Sensor sampling and notifications." },
    ],
  },
  {
    slug: "barista-seed-to-cup",
    title: "Barista Seed To Cup",
    summary:
      "Link-in-bio style digital portfolio for a Dubai-based specialty coffee professional.",
    client: "Dubai specialty-coffee professional — link-in-bio portfolio.",
    // TODO(owner): problem — what was missing before this site. Do not invent.
    problem: "",
    solution:
      "A mobile-first Next.js site on Cloudflare Workers. The live page has a video background, a profile hero, social and contact links, core-portfolio links, certification cards, and a press and features section.",
    // TODO(owner): my role — exactly what Arafat built vs existing brand assets. Do not invent.
    role: "",
    results: [
      {
        label: "Live TTFB",
        value: "0.35 s",
        date: "22 Sep 2026",
        source:
          "curl -w time_starttransfer against https://baristaseed2cup.alyyconnect.workers.dev/",
      },
    ],
    // TODO(owner): screenshots — desktop + mobile of the live UI, no client
    // phone numbers, personal handles, or full names in the frame.
    screenshots: [],
    liveUrl: "https://baristaseed2cup.alyyconnect.workers.dev/",
    repoUrl: null,
    repoNote: "Private repository — walkthrough available.",
    stack: ["Next.js", "Tailwind CSS", "Cloudflare Workers", "mobile-first"],
    architecture: [
      { id: "client", label: "Browser", detail: "Mobile-first Next.js UI." },
      { id: "edge", label: "Cloudflare Workers", detail: "Static assets at the edge." },
    ],
  },
  {
    slug: "slick-barista",
    title: "Slick Barista",
    summary:
      "Personal brand site for a UAE barista finalist and latte art specialist, with a booking-focused layout.",
    client: "UAE barista-finalist personal brand — booking-focused site.",
    // TODO(owner): problem — what was missing before this site. Do not invent.
    problem: "",
    solution:
      "A Next.js site on Cloudflare Workers. The live page includes About, Certifications, Masterclasses, Origins & Travels, Competitions, Gallery, Journal, a Share/QR feature, a featured masterclass with a reservation path, and a consulting enquiry path.",
    // TODO(owner): my role — exactly what Arafat built vs existing brand assets. Do not invent.
    role: "",
    results: [
      {
        label: "Live TTFB",
        value: "0.07 s",
        date: "22 Sep 2026",
        source:
          "curl -w time_starttransfer against https://slick-barista.alyyconnect.workers.dev/",
      },
    ],
    // TODO(owner): screenshots — desktop + mobile of the live UI, no client
    // phone numbers, personal handles, or full names in the frame.
    screenshots: [],
    liveUrl: "https://slick-barista.alyyconnect.workers.dev/",
    repoUrl: null,
    repoNote: "Private repository — walkthrough available.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Cloudflare Workers",
      "WhatsApp booking",
      "QR sharing",
    ],
    architecture: [
      { id: "client", label: "Browser", detail: "Booking-focused Next.js UI." },
      { id: "edge", label: "Cloudflare Workers", detail: "Static assets at the edge." },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export const howIWork = [
  {
    step: "01",
    title: "Discover",
    text: "Map the business constraint, users, and what already exists. Typical: 2–4 days.",
  },
  {
    step: "02",
    title: "Design",
    text: "IA, UI, and a thin architecture sketch before production code. Typical: 3–7 days.",
  },
  {
    step: "03",
    title: "Build",
    text: "Ship a working slice on the real stack (Next.js, Workers, or static). Typical: 1–3 weeks.",
  },
  {
    step: "04",
    title: "Deploy",
    text: "Cloudflare edge deploy, domains, and a rollback path. Typical: 1–2 days.",
  },
  {
    step: "05",
    title: "Support",
    text: "Fixes, content updates, and measurement after launch. Typical: ongoing, scoped.",
  },
] as const;

export const posts = [
  {
    slug: "realtime-color-configurator",
    title: "Building a real-time color configurator in Next.js",
    date: "2026-09-21",
    excerpt:
      "Keep configurator state in the client, derive CSS variables, and avoid round-trips until checkout.",
    body: `The HIMBA tumbler work is a client-side color state problem, not a CMS problem.

Hold the selected color in React state. Map it to CSS custom properties on the product SVG or canvas. Persist the SKU only when the visitor checks out.

That keeps interaction under 16 ms on the main thread for a simple palette, and it deploys as a static Next.js export on Cloudflare Pages.`,
  },
  {
    slug: "bilingual-storefront-on-cloudflare",
    title: "Edge-deploying a bilingual storefront on Cloudflare",
    date: "2026-09-21",
    excerpt:
      "Serve EN/AR from one static build: hreflang, RTL, and a language toggle that does not hide routes from crawlers.",
    body: `A bilingual jewelry catalog should not wait on a Node server in one region.

Export static routes per locale (or a dedicated /ar tree). Set hreflang both ways. Use dir="rtl" only on Arabic documents so Latin product codes stay copy-pasteable.

Cloudflare Pages or Workers static assets then cache each locale independently.`,
  },
  {
    slug: "ble-gatt-for-a-cycling-head-unit",
    title: "Designing BLE GATT services for a cycling head unit",
    date: "2026-09-21",
    excerpt:
      "Define services and characteristics before firmware and app disagree in the field.",
    body: `ZAHA’s constraint was a stable contract between the HUD and the microcontroller.

List services (navigation, sensors). For each characteristic: UUID, read/write/notify, payload size, and units. Document endianness.

The mobile or HUD app then subscribes to notifications instead of polling. That is the GATT work; it is not a marketing site.`,
  },
] as const;

// TODO(owner): testimonials with permission — name, role, business, written
// approval. Do not render a testimonials section until two exist.
// TODO(owner): product demo videos (P5-05) — 60–90s captioned recordings per
// major project. Do not invent or embed placeholders.

export const certMap = [
  {
    // TODO(owner): credential verification link — unique Credly (or issuer)
    // badge URL. Confirm this is the exam credential, not the SY0-701 course PDF.
    credential: "CompTIA Security+",
    issuer: "CompTIA",
    year: "2025",
    href: "https://www.credly.com/users/arafat-sulaiman-m",
    pdf: "/certificates/comptia-security.pdf",
    capability: "Secure ops dashboards, PIN gates, and least-privilege admin UI.",
    projects: ["Golden Vanilla System"],
  },
  {
    credential: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    year: "2025",
    href: "https://www.credly.com/users/arafat-sulaiman-m",
    pdf: "/certificates/cyber-threat-management.pdf",
    capability: "Threat-aware defaults on public forms and edge deploys.",
    projects: ["This site (Turnstile-ready contact)"],
  },
  {
    credential: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2025",
    href: "https://www.credly.com/users/arafat-sulaiman-m",
    pdf: "/certificates/introduction-to-cybersecurity.pdf",
    capability: "Baseline security hygiene on public Workers and Pages.",
    projects: ["Mihbash Cafe", "This site"],
  },
  {
    credential: "Networking Basics",
    issuer: "Cisco Networking Academy",
    year: "2025",
    href: "https://www.credly.com/users/arafat-sulaiman-m",
    pdf: "/certificates/networking-basics.pdf",
    capability: "DNS, TLS, and edge routing for Cloudflare deploys.",
    projects: ["HIMBA Coffee", "IKRAM Collection"],
  },
] as const;
