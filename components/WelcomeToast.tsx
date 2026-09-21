"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";

export function WelcomeToast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenGreeting = sessionStorage.getItem("hasSeenGreeting");
    if (hasSeenGreeting) return;

    const showTimer = window.setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem("hasSeenGreeting", "true");
    }, 1500);

    const dismissTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 6500);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(dismissTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-6 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-black/15 bg-[#f0efed]/90 px-5 py-3 text-sm text-neutral-700 shadow-[0_8px_30px_rgba(17,17,17,0.08)] backdrop-blur-xl"
          role="status"
          aria-live="polite"
        >
          <Sparkles className="size-4 shrink-0 text-amber-600" />
          <span>
            <span className="font-bold tracking-wide text-red-600">
              AlyyConnect
            </span>{" "}
            wishes a blessed day for you! ✨
          </span>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="ml-2 rounded-lg p-1 text-neutral-600 transition-colors hover:bg-black/[0.06] hover:text-neutral-900"
            aria-label="Close message"
          >
            <X className="size-4" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
