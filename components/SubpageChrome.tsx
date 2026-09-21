import type { ReactNode } from "react";
import Link from "next/link";
import { pageLinks } from "@/lib/site-data";
import { Footer } from "@/components/SiteFooter";
import { FloatingNav } from "@/components/FloatingNav";
import { AskAssistant } from "@/components/AskAssistant";

export function SubpageChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="border-b border-black/10 bg-[#F0EDE4]/80 px-4 py-3 backdrop-blur sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <Link href="/" className="text-sm font-semibold text-[#004741]">
            Arafat Sulaiman
          </Link>
          <nav aria-label="Section" className="flex flex-wrap gap-3 text-sm">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004741]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
      <Footer />
      <FloatingNav home={false} />
      <AskAssistant />
    </>
  );
}
