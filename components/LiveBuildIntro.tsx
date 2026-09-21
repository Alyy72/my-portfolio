"use client";

import { useEffect } from "react";

export function LiveBuildIntro({ onDone }: { onDone?: () => void }) {
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.data?.source !== "live-build") return;
      if (event.data.status === "complete" || event.data.status === "skip") {
        onDone?.();
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[80] bg-[#004741]">
      <iframe
        src="/live-build.html"
        title="Live build of Arafat Sulaiman portfolio"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
