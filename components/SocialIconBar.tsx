"use client";

import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import type { IconType } from "react-icons";
import { socialLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  whatsapp: FaWhatsapp,
  credly: SiCredly,
  instagram: FaInstagram,
  email: FaEnvelope,
};

type QuickLinksProps = {
  className?: string;
  showTitle?: boolean;
  iconOnly?: boolean;
};

export function QuickLinks({
  className,
  showTitle = true,
  iconOnly = false,
}: QuickLinksProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {showTitle ? (
        <h3 className="text-sm font-medium tracking-wide text-muted">
          Quick links
        </h3>
      ) : null}
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.id] ?? FaEnvelope;
          const isExternal = link.href.startsWith("http");

          return (
            <a
              key={link.id}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className={cn(
                "inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 text-sm font-medium shadow-md backdrop-blur-md transition-all duration-300",
                iconOnly ? "size-10 justify-center" : "px-4 py-2.5",
                link.color,
              )}
            >
              <Icon className="text-lg" />
              {!iconOnly ? <span>{link.label}</span> : null}
            </a>
          );
        })}
      </div>
    </div>
  );
}

/** @deprecated Prefer QuickLinks — kept for any remaining imports */
export function SocialIconBar({
  className,
  showLabels = false,
}: {
  orientation?: "vertical" | "horizontal";
  className?: string;
  showLabels?: boolean;
  exclude?: string[];
}) {
  return (
    <QuickLinks
      className={className}
      showTitle={false}
      iconOnly={!showLabels}
    />
  );
}
