import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function CtaRow({
  home = true,
  className,
}: {
  home?: boolean;
  className?: string;
}) {
  const prefix = home ? "" : "/";
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        href={`${prefix}#contact`}
        className="inline-flex h-11 items-center rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white transition hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004741]"
      >
        Start a project
      </a>
      <a
        href={siteConfig.resumeUrl}
        className="inline-flex h-11 items-center rounded-full border border-black/10 bg-black/[0.03] px-5 text-sm font-medium text-neutral-900 transition hover:border-black/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004741]"
      >
        Download CV
      </a>
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 items-center rounded-full border border-[#004741]/30 px-5 text-sm font-medium text-[#004741] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004741]"
      >
        Book a 20-min intro
      </a>
    </div>
  );
}
