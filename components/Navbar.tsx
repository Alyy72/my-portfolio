"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 110) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] transition-all",
        scrolled || open ? "py-2" : "py-4",
      )}
    >
      <div
        className={cn(
          "relative z-[70] mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-2xl px-4 sm:px-5",
          scrolled || open ? "glass mx-3 sm:mx-6" : "bg-transparent",
        )}
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className={cn(
            "font-mono text-sm font-semibold transition-colors",
            scrolled || open ? "text-neutral-900" : "text-[#F0EDE4]",
          )}
        >
          {siteConfig.brand}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors",
                scrolled || open
                  ? active === link.href
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:text-neutral-900"
                  : active === link.href
                    ? "bg-[#F0EDE4]/12 text-[#F0EDE4]"
                    : "text-[#F0EDE4]/65 hover:text-[#F0EDE4]",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {scrolled || open ? (
            <span className="hidden items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-xs font-medium text-emerald-600 sm:inline-flex">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              AVAILABLE FOR WORK
            </span>
          ) : (
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-1 border-b border-[#F0EDE4]/40 pb-0.5 text-[13px] text-[#F0EDE4] transition-colors hover:border-[#F0EDE4] sm:inline-flex"
            >
              Book A Call
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
          <button
            type="button"
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-full border transition-colors md:hidden",
              scrolled || open
                ? "border-black/10 bg-[#f0efed]/80 text-neutral-900"
                : "border-[#F0EDE4]/25 bg-[#004741]/40 text-[#F0EDE4]",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[65] md:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-[#f0efed]/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <div className="absolute inset-x-3 top-[4.5rem] z-[66] overflow-hidden rounded-2xl border border-black/10 bg-[#f0efed]/95 p-4 shadow-[0_8px_30px_rgba(17,17,17,0.08)] backdrop-blur-xl">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-lg font-semibold text-neutral-900 transition-colors hover:bg-black/[0.03] hover:text-neutral-900",
                    active === link.href && "bg-black/[0.04] text-neutral-900",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
