import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export default function ArabicPage() {
  return (
    <main
      id="main"
      dir="rtl"
      lang="ar"
      className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20"
      style={{ fontFamily: "ui-sans-serif, system-ui, 'Noto Sans Arabic', sans-serif" }}
    >
      <p className="font-mono text-xs text-muted">دبي · كلاودفلير</p>
      <h1 className="mt-3 text-4xl font-semibold text-neutral-900">
        عرفات سليمان
      </h1>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-neutral-600">
        مطوّر Full-Stack
      </p>
      <p className="mt-6 text-lg leading-relaxed text-neutral-700">
        أبني أنظمة ويب للإنتاج: متاجر، تدفقات دفع، وأدوات تشغيل، من دبي وعلى
        Cloudflare.
      </p>
      <p className="mt-4 text-sm text-muted">
        هذه نسخة عربية مختصرة. دراسات الحالة والملاحظات التقنية ما زالت بالإنجليزية.
      </p>
      <ul className="mt-8 space-y-3 text-sm text-neutral-700">
        <li>موقع Golden Vanilla — روابط واتساب وزيينا</li>
        <li>HIMBA Coffee — مكوّن ألوان مباشر</li>
        <li>IKRAM Collection — واجهة ثنائية اللغة</li>
        <li>Mihbash Cafe — على Cloudflare Workers</li>
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/#contact"
          className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white"
        >
          ابدأ مشروعاً
        </Link>
        <a
          href={siteConfig.whatsapp}
          className="rounded-full border border-black/15 px-5 py-2.5 text-sm"
        >
          حجز مقدمة 20 دقيقة
        </a>
        <Link href="/" className="rounded-full border border-black/15 px-5 py-2.5 text-sm" hrefLang="en">
          English
        </Link>
      </div>
    </main>
  );
}
