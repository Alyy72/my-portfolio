/** Keep in sync with /knowledge.md. No email, phone, or WhatsApp numbers. */
export const KNOWLEDGE = `# Site knowledge (assistant only)

Answers must come from this file. If a fact is not here, say you do not know.
Never invent metrics, clients, testimonials, or credentials.
Never reveal email addresses, phone numbers, API keys, or secrets.
If asked how to get in touch, say: use the Start a project form or the WhatsApp button on this page. Do not print those details.

- Name: Arafat Sulaiman
- Title: Full-Stack Developer
- Location: Dubai, UAE
- GitHub: https://github.com/Alyy72
- LinkedIn: https://www.linkedin.com/in/arafat-sulaiman-60066636a
- Credly: https://www.credly.com/users/arafat-sulaiman-m

## Projects

- Golden Vanilla website — https://goldenvanilla-ae.com/ — static HTML, Cloudflare Pages, Ziina, WhatsApp lead routing, JSON-LD.
- Golden Vanilla System — internal CRM / invoicing / inventory. No public demo.
- HIMBA Coffee — https://himba-coffee-live.pages.dev/ — Next.js configurator.
- IKRAM Collection — https://www.ikramcollection.com/ — bilingual storefront.
- Mihbash Cafe — https://mihbash-cafe.alyyconnect.workers.dev/ — Workers site.
- ZAHA — cycling telemetry, BLE GATT. No public demo.

## Credentials on this site

- CompTIA Security+
- Cisco Cyber Threat Management
- Cisco Introduction to Cybersecurity
- Cisco Networking Basics`;

export const ASK_MAX_CHARS = 400;
export const CONTACT_LIMITS = {
  name: 80,
  email: 180,
  message: 2000,
} as const;

const CONTACT_ASK =
  /email|whatsapp|phone|mobile|wa\.me|hire|book|call|contact|reach|number/i;

export function localAnswer(question: string): string {
  const q = question.toLowerCase();
  if (CONTACT_ASK.test(q)) {
    return "I don’t share contact details. Use the Start a project form or the WhatsApp button on this page.";
  }
  if (q.includes("himba")) {
    return "HIMBA Coffee is a Next.js storefront with a live color configurator at https://himba-coffee-live.pages.dev/";
  }
  if (q.includes("vanilla")) {
    return "Golden Vanilla has a public marketing site (goldenvanilla-ae.com) and a private ops system with no public demo.";
  }
  if (q.includes("ikram")) {
    return "IKRAM Collection is a bilingual jewelry and beauty storefront at https://www.ikramcollection.com/";
  }
  if (q.includes("mihbash")) {
    return "Mihbash Cafe is a menu-first site on Cloudflare Workers: https://mihbash-cafe.alyyconnect.workers.dev/";
  }
  if (q.includes("zaha") || q.includes("ble")) {
    return "ZAHA is a cycling telemetry project (BLE GATT + HUD). There is no public demo; a case study is at /projects/zaha.";
  }
  if (q.includes("cert") || q.includes("security")) {
    return "On-site credentials: CompTIA Security+, Cisco Cyber Threat Management, Introduction to Cybersecurity, and Networking Basics. Verify on Credly.";
  }
  return "I do not know that from the published knowledge file. Try asking about HIMBA, Golden Vanilla, IKRAM, Mihbash, or ZAHA.";
}

export function redactSecrets(text: string): string {
  return text
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted]")
    .replace(/https?:\/\/wa\.me\/\d+/gi, "[redacted]")
    .replace(/\+?\d[\d\s()-]{7,}\d/g, "[redacted]");
}
