"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
          className="font-mono text-sm font-semibold text-white"
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
                active === link.href
                  ? "bg-accent-soft text-accent"
                  : "text-muted hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-emerald-300 sm:inline-flex">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            AVAILABLE FOR WORK
          </span>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0f]/80 text-white md:hidden"
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
            className="absolute inset-0 bg-[#0a0a0f]/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <div className="absolute inset-x-3 top-[4.5rem] z-[66] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-lg font-semibold text-white transition-colors hover:bg-white/5 hover:text-purple-400",
                    active === link.href && "bg-purple-500/15 text-purple-300",
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
