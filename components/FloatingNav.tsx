"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FolderKanban,
  Home,
  Layers,
  Mail,
  MessageCircle,
  Sparkles,
  User,
} from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const iconMap = {
  "#home": Home,
  "#about": User,
  "#experience": Layers,
  "#capabilities": Sparkles,
  "#portfolio": FolderKanban,
  "#contact": Mail,
} as const;

export function FloatingNav({ home = true }: { home?: boolean }) {
  const [active, setActive] = useState("#home");
  const reduced = useReducedMotion();
  const prefix = home ? "" : "/";

  useEffect(() => {
    if (!home) return;
    const onScroll = () => {
      const ids = navLinks.map((l) => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive(`#${id}`);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [home]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-3">
      <motion.nav
        aria-label="Primary"
        whileHover={reduced ? undefined : { scale: 1.05 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-[#F0EDE4]/15 bg-[#004741]/80 p-1.5 shadow-[0_12px_40px_rgba(0,71,65,0.28)] backdrop-blur-md sm:gap-1 sm:p-2"
      >
        {navLinks.map((link) => {
          const Icon = iconMap[link.href];
          const isActive = home && active === link.href;

          return (
            <a
              key={link.href}
              href={`${prefix}${link.href}`}
              aria-label={link.label}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex min-w-10 flex-col items-center justify-center rounded-full px-2.5 py-2 text-[#F0EDE4] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0EDE4] sm:min-w-14 sm:px-3",
                isActive
                  ? "bg-[#F0EDE4]/15"
                  : "text-[#F0EDE4]/65 hover:bg-[#F0EDE4]/8 hover:text-[#F0EDE4]",
              )}
            >
              <Icon className="size-4" strokeWidth={isActive ? 2.25 : 1.75} />
              <span className="mt-0.5 hidden text-[9px] font-medium tracking-wide sm:block">
                {link.label}
              </span>
            </a>
          );
        })}

        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a 20-minute intro on WhatsApp"
          className="ml-0.5 hidden size-10 items-center justify-center rounded-full bg-[#F0EDE4] text-[#004741] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0EDE4] sm:inline-flex"
        >
          <MessageCircle className="size-4" />
        </a>
      </motion.nav>
    </div>
  );
}
