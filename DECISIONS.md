# Decisions

Owner approved the audit plan on 21 Sep 2026 by requesting implementation, then asked for remaining phases (P2–P7) in one pass. The spec file only contains Phases 1–5; P6/P7 do not exist there. This pass implements Phases 2–5.

## Defaults applied

- Canonical URL is the live Worker: `https://arafat-dev.alyyconnect.workers.dev` (P3-01). `arafat.dev` is not claimed.
- No invented metrics, testimonials, or credentials.
- **P2-05:** Testimonials omitted until attributed quotes exist.
- **P2-06:** Only certificates with PDFs/Credly on this repo. Spec A+/ITIL/Google IT Support not added.
- **P4-03:** Booking is WhatsApp 20-minute intro, not Cal.com.
- **P4-04:** Dated filename added; CV body not regenerated (no PDF editor in this pass).
- **P4-05:** No GA4 measurement ID — no analytics events.
- **P5-05:** No fabricated videos; galleries and live demos only.
- **P5-06:** Arabic is a short RTL landing page, not a full translation of every case study.
- Worker `/api/*` with optional env: `TURNSTILE_SECRET`, `RESEND_API_KEY`, `CONTACT_TO`, `ANTHROPIC_API_KEY`. STATUS KV is not bound until an ID is created.
- Visual identity stays Cyprus `#004741` / Sand `#F0EDE4`.
- Live-build intro removed from LCP path; available at `/lab`.
- Spec has no Phase 6 or 7.

## Owner overrides

- Implement remaining phases now (not one phase then stop).
- 22 Sep 2026: add Barista Seed To Cup and Slick Barista using stated defaults — titles without `@` handles; no client names/phones on this site; TTFB only as a result; skip engineeringWork and the cert map; do not copy podium or client credential names; `TODO(owner)` for problem, role, screenshots, testimonials; branch `add-barista-projects`; no production deploy.
