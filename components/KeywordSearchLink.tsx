"use client";

import { cn } from "@/lib/utils";

type KeywordSearchLinkProps = {
  role: string;
  name?: string;
  location?: string;
  className?: string;
  children?: React.ReactNode;
};

export function KeywordSearchLink({
  role,
  className,
  children,
}: KeywordSearchLinkProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span>{children ?? role}</span>
    </span>
  );
}
