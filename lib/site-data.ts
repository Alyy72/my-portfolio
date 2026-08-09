export const siteConfig = {
  name: "Arafat Sulaiman Nawanda",
  shortName: "Arafat",
  age: 22,
  location: "Dubai",
  email: "arafatalyy.it@gmail.com",
  socials: {
    github: "https://github.com/ashuraalyy",
    linkedin: "https://www.linkedin.com",
  },
  tagline: "Bridging the Physical and the Digital.",
  subhead: "From specialty coffee cultivation to autonomous web deployment.",
};

export const timeline = [
  {
    id: "origins",
    date: "Origins",
    title: "Curiosity & Cultivation",
    body: "Grew up hands-on — soil under nails, seasons as teachers. Agriculture was never a hobby. It was the first operating system I learned.",
  },
  {
    id: "barista",
    date: "Jan 2024",
    title: "Frontlines, Not Theory",
    body: "Stepped into Senior Barista and Customer Service Specialist roles. Specialty V60. Arabic coffee. High pressure, real clients, no resets. Content around the craft followed the craft — not the other way around.",
  },
  {
    id: "ged",
    date: "Early 2026",
    title: "Academic Grit",
    body: "Took the GED head-on. Mapped study sequences like a campaign. Hit 159 on practice tests. Proof that persistence outruns polish.",
  },
  {
    id: "milestones",
    date: "Mid 2026",
    title: "Physical & Financial Milestones",
    body: "Scaled the land: 300 coffee trees and vanilla vines under management. Hit daily 15km road cycling on Continental GP5000s with a Cycplus computer. Started tracking long-term equity plays in VOO and JEPI.",
  },
  {
    id: "digital",
    date: "Aug 2026 → Present",
    title: "The Digital Transition",
    body: "New M5 MacBook Air. Agentic AI environments — Cursor, Cline, Gemini, Claude. Shipping web apps through GitHub and Cloudflare Pages. Same grit. New toolchain.",
  },
] as const;

export const projects = [
  {
    id: "agri-dash",
    title: "Agri-Dash",
    status: "Concept",
    summary:
      "A growth-cycle dashboard for vanilla vines and coffee trees — weather impact, irrigation windows, and harvest readiness in one view.",
    stack: ["Next.js", "Charts", "Agentic AI"],
    success:
      "Mapped real agricultural signals into a clean operator UI. Built for the field, not a demo reel.",
    fails:
      "Over-modeled weather first and under-modeled soil reality. Lesson: ground truth before graph polish. Agent drafts moved fast — validation still had to be human.",
  },
  {
    id: "cycling",
    title: "Cycling Analytics",
    status: "Concept",
    summary:
      "Performance UI reading Cycplus computer metrics and GP5000 tire telemetry into pace, load, and recovery signals.",
    stack: ["TypeScript", "Telemetry UI", "Motion"],
    success:
      "Turned daily 15km grind into readable patterns — cadence spikes, fatigue dips, consistency streaks.",
    fails:
      "Chased every metric and drowned the signal. Lesson: one primary KPI per view. Friction taught me less dashboard, more decision.",
  },
  {
    id: "equity",
    title: "Equity Tracker",
    status: "Concept",
    summary:
      "Long-horizon interface for VOO and JEPI — compounding curves, allocation notes, and calm market context.",
    stack: ["React", "Finance UI", "Charts"],
    success:
      "Designed for patience: clear growth arcs without the casino UI. Built for holding, not hype.",
    fails:
      "First pass looked like a trading terminal. Wrong energy. Lesson: long-term investing deserves quieter design.",
  },
  {
    id: "refactor",
    title: "The Refactor",
    status: "Live Pipeline",
    summary:
      "kram-collection deployment pipeline — Cursor → GitHub → Cloudflare. Autonomous build loops with human taste at the gate.",
    stack: ["Cursor", "GitHub", "Cloudflare Pages"],
    success:
      "Got a repeatable ship path working: generate, review, push, deploy. Speed without losing ownership of the outcome.",
    fails:
      "Agent confidence ≠ production readiness. Broken env vars, bad cache headers, over-eager refactors. Lesson: agents accelerate; you still own the blast radius.",
  },
] as const;

export const gallery = [
  {
    id: "v60",
    label: "V60 pours",
    caption: "Specialty coffee — ritual, precision, steam.",
    icon: "Coffee" as const,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "cycling-setup",
    label: "Road cycling setup",
    caption: "GP5000s. Cycplus. 15km daily.",
    icon: "Bike" as const,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "land",
    label: "Agricultural land",
    caption: "300 coffee trees. Vanilla vines. Dirt-first.",
    icon: "Sprout" as const,
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: "portrait",
    label: "Portrait gift",
    caption: "Hand-drawn portrait — gifted by my girlfriend.",
    icon: "Heart" as const,
    span: "md:col-span-2 md:row-span-1",
    featured: true,
  },
] as const;
