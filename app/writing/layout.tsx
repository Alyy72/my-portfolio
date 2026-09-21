import type { ReactNode } from "react";
import { SubpageChrome } from "@/components/SubpageChrome";

export default function WritingLayout({ children }: { children: ReactNode }) {
  return <SubpageChrome>{children}</SubpageChrome>;
}
