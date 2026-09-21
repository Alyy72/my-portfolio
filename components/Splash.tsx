"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Globe, User } from "lucide-react";

export function Splash({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
      window.setTimeout(onDone, 500);
    }, 2200);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#004741]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-grain pointer-events-none absolute inset-0" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-6 flex items-center justify-center gap-4 text-[#F0EDE4]/55"
            >
              <Code2 className="size-5" />
              <User className="size-5" />
              <Globe className="size-5" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl font-semibold tracking-tight text-[#F0EDE4] sm:text-5xl"
            >
              Welcome
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-3 font-mono text-sm text-[#F0EDE4]/60"
            >
              {"</>"} loading portfolio…
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
