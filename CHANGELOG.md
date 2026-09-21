# Changelog

## Phase 2 — Proof and case studies

- **P2-01:** Case-study pages at `/projects/<slug>` for Golden Vanilla (site + system), HIMBA, IKRAM, Mihbash, and ZAHA.
- **P2-02:** Results are measured TTFB/size from 21 Sep 2026, or explicit “no public demo”.
- **P2-03:** Internal/hardware work uses annotated galleries and “walkthrough available”, not fake demos.
- **P2-04:** Removed unsupported adjectives (high-conversion, gallery-grade, production-ready as a claim).
- **P2-05:** Testimonials skipped — none supplied, none invented.
- **P2-06:** Credentials limited to on-disk Cisco + Security+ PDFs and Credly. A+/ITIL/Google IT not added without files.
- **P2-07:** How I work section with five steps and typical timelines.

## Phase 3 — Technical polish

- **P3-01:** Canonical, OG, and sitemap use `https://arafat-dev.alyyconnect.workers.dev`.
- **P3-02:** JSON-LD Person + WebSite + CreativeWork graph.
- **P3-03:** Hero/photos converted to WebP; live-build moved to `/lab`; skip intro on the homepage.
- **P3-04:** Skip link, focus styles, reduced-motion on Reveal/hero/nav, one h1 on the home page.
- **P3-06:** Hero CTAs target `#contact` and `#portfolio`.
- **P3-07:** `public/_headers` CSP and related headers. No analytics until an ID exists.
- **P3-08:** Footer trimmed to socials, routes, privacy, cookies, copyright, and CTAs.

## Phase 4 — Conversion

- **P4-01:** Contact form posts `/api/contact` on the Worker (Turnstile + Resend when env is set; mailto fallback otherwise).
- **P4-02:** Primary CTA “Start a project”; secondary “Download CV”.
- **P4-03:** Booking is WhatsApp 20-minute intro (no Cal.com).
- **P4-04:** Dated CV copy `Arafat-Sulaiman-CV-2026-09.pdf` (PDF body not rewritten).
- **P4-05:** No GA4 ID — analytics does not fire.

## Phase 5 — Differentiators

- **P5-01:** Ask-about-my-work widget; Worker `/api/ask` with knowledge-file fallback.
- **P5-02:** Interactive architecture explorer on each case study.
- **P5-03:** Status board + `/api/status` (measured fallback until cron persists).
- **P5-04:** Three technical notes under `/writing`.
- **P5-05:** No demo videos invented; screenshot galleries only.
- **P5-06:** `/ar` RTL short page with hreflang.
- **P5-07:** `starters/cloudflare-ziina-storefront` README skeleton.
- **P5-08:** Cyprus/Sand tokens and reduced-motion rules.
- **P5-09:** Certification-to-capability map for on-site credentials.

## Phase 1 — Credibility and positioning

- **P1-01:** Replaced defensive Hook copy with outcome-led headline and supporting line. Removed degree/peer comparison language.
- **P1-02:** Standardized the public title to Full-Stack Developer in the hero, document title, meta, OG, JSON-LD, about, and live-build preview. Alternate titles are now skill tags.
- **P1-03:** Replaced “Hubungi Saya” with “Contact Me”.
- **P1-04:** Labeled capability mockup statistics as Sample data.
- **P1-05:** Counters now SSR the real values (5 / 4 / 4) derived from listed projects, certificate PDFs, and live demos. Animation still counts up on scroll unless reduced-motion is set.
- **P1-06:** Removed outbound Google-search keyword links. Role/skill text is plain.
- **P1-07:** Removed the guestbook, image upload, and localStorage comment store. Privacy/cookie copy no longer mentions it.
