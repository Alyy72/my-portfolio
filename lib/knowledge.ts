export const KNOWLEDGE = `Arafat Sulaiman is a Full-Stack Developer in Dubai.
Projects: Golden Vanilla website (goldenvanilla-ae.com, Ziina, WhatsApp, Cloudflare Pages), Golden Vanilla System (internal CRM, no public demo), HIMBA Coffee configurator (himba-coffee-live.pages.dev), IKRAM Collection bilingual storefront (ikramcollection.com), Mihbash Cafe (Workers), ZAHA BLE cycling telemetry (no public demo).
Contact: arafatalyy.it@gmail.com, WhatsApp +971529033466 for a 20-minute intro.
Do not invent metrics, clients, or testimonials.`;

export function localAnswer(question: string): string {
  const q = question.toLowerCase();
  if (q.includes("whatsapp") || q.includes("book") || q.includes("call")) {
    return "Book a 20-minute intro on WhatsApp: https://wa.me/971529033466";
  }
  if (q.includes("email") || q.includes("contact") || q.includes("hire")) {
    return "Email arafatalyy.it@gmail.com, use the contact form, or WhatsApp for a 20-minute intro.";
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
  return "I only answer from Arafat’s published case studies. Try asking about HIMBA, Golden Vanilla, IKRAM, Mihbash, or ZAHA.";
}
