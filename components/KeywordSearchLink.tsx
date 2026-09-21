"use client";

import { FaSearch } from "react-icons/fa";
import { cn } from "@/lib/utils";

type KeywordSearchLinkProps = {
  role: string;
  name?: string;
  location?: string;
  className?: string;
  children?: React.ReactNode;
};

export function googleSearchUrl(
  role: string,
  name = "Arafat Sulaiman",
  location = "Dubai",
) {
  const query = `${name} ${role} ${location}`.replace(/\s+/g, "+");
  return `https://www.google.com/search?q=${query}`;
}

export function KeywordSearchLink({
  role,
  name = "Arafat Sulaiman",
  location = "Dubai",
  className,
  children,
}: KeywordSearchLinkProps) {
  return (
    <a
      href={googleSearchUrl(role, name, location)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/keyword inline-flex items-center gap-1.5 cursor-pointer transition-all hover:text-neutral-900 hover:underline decoration-neutral-900/40 decoration-2 underline-offset-4",
        className,
      )}
      title={`Search Google for ${name} ${role} ${location}`}
    >
      <span>{children ?? role}</span>
      <FaSearch className="size-3 opacity-0 transition-all group-hover/keyword:opacity-100" />
    </a>
  );
}
