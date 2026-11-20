# Arafat Sulaiman — portfolio

A portfolio for a Dubai-based developer building storefronts and business tools with AI-assisted development.

Public site: https://my-portfolio.alyyconnect.workers.dev/

## Run locally

Use the Node version required by the installed Next.js package and the committed npm lockfile.

```sh
npm ci
npm run dev
```

For a production-equivalent preview with the contact and assistant endpoints:

```sh
npm run build
npx wrangler dev --local
```

This is a static Next.js export. Use Wrangler for production preview; `next start` is not the serving model for this app.

## How it works

- `app/`: homepage, project case studies, writing, and Arabic landing page.
- `lib/site-data.ts`: navigation, public profile, project cards, and skills.
- `lib/case-studies.ts`: project scope, ownership, walkthroughs, and dated evidence.
- `lib/page-metadata.ts`: route-specific canonical and social-sharing metadata.
- `worker/index.ts`: serves exported assets and handles contact, assistant, and status endpoints.
- `public/knowledge.md` and `lib/knowledge.ts`: keep the assistant knowledge and bundled fallback aligned.

The site exports to `out/`. Cloudflare Workers serves those assets and runs API requests first. Private project data is not stored in this repository.

## Design decisions

Selected work appears before biography and capabilities. Mobile navigation includes readable labels. Dialogs use the native browser dialog element for focus containment and Escape handling. Content is visible immediately without scroll-reveal JavaScript.

Contact failures retain the message and offer an explicit email draft. Opening a draft is not treated as delivery. Capabilities use clearly labelled sample data. Historical response timings are not presented as sales results or current performance guarantees.

## Local configuration

Local Worker secrets belong in `.dev.vars`, which is ignored by Git. Never commit real credentials.

- `RESEND_API_KEY`: enables contact delivery.
- `NEXT_PUBLIC_CONTACT_FORM_ENABLED=true`: enable direct form submission at build time only after delivery has been configured and verified. By default, the form prepares a manual email draft.
- `CONTACT_TO`: destination inbox; defaults to the portfolio owner address in the Worker.
- `TURNSTILE_SECRET`: enables server-side bot verification. Pair with `NEXT_PUBLIC_TURNSTILE_SITE_KEY` at frontend build time.
- `ANTHROPIC_API_KEY`: optional assistant provider; without it, published local answers are used.
- `STATUS`: optional KV binding for scheduled status observations.

Without mail configuration, contact returns an unavailable response and the UI offers a manual draft. The current sender uses the Resend onboarding address; verify sender restrictions before relying on production delivery.

The assistant request/token counters are best-effort local/cache controls, not a globally atomic billing limit. Review these controls before enabling a paid provider at scale.

## Validation

```sh
npm run lint
npm run build
npx wrangler deploy --dry-run
```

Browser checks include phone/desktop overflow, navigation, certificate dialogs and Escape, and failed contact submission retaining the draft. The HIMBA demo was checked for variant and engraving propagation into its WhatsApp link without sending an order.

Before release, verify actual contact receipt, production bindings, public demo links, keyboard navigation, and deployed loading behavior. A successful build or dry run does not prove email delivery or production availability.

## Release

The configured Worker is `my-portfolio`. Restore Cloudflare authentication, inspect the existing Worker settings, and reconcile dashboard bindings and variables with `wrangler.jsonc` before running `npm run deploy`.

The improvement PR targets `add-barista-projects`, the complete application branch at the time of this work. The repository default branch `main` was incomplete; do not deploy it without checking its contents.

## Content still needed

Real interface screenshots are the next visual addition. Private-system captures must use sample records. An updated resume requires the owner-approved employment and education details. Testimonials are omitted because no publishable written quotations were supplied. Do not invent commercial outcomes, credential verification, or testing claims.
