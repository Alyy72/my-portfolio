import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Keep content visible on first render and without JavaScript.
// Retain the delay prop for existing callers; content no longer waits on animation.
export function Reveal({ children, className }: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={cn(className)}>{children}</div>;
}
