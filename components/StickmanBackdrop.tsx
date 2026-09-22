"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const codeTokens = [
  { t: "</>", x: "8%", y: "18%", delay: 0 },
  { t: "{ }", x: "84%", y: "22%", delay: 0.35 },
  { t: "=>", x: "12%", y: "52%", delay: 0.7 },
  { t: "fn()", x: "80%", y: "58%", delay: 0.15 },
  { t: "<>", x: "90%", y: "40%", delay: 0.95 },
  { t: "const", x: "6%", y: "36%", delay: 0.5 },
  { t: "async", x: "74%", y: "12%", delay: 0.25 },
  { t: "[]", x: "18%", y: "74%", delay: 1.1 },
  { t: "npm", x: "86%", y: "76%", delay: 0.6 },
  { t: "git", x: "10%", y: "68%", delay: 0.85 },
] as const;

export function StickmanBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const video = videoRef.current;
    if (!video) return;
    const play = () => {
      video.play().catch(() => undefined);
    };
    play();
    video.addEventListener("canplay", play);
    return () => video.removeEventListener("canplay", play);
  }, [reduced]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#f0efed]"
      aria-hidden="true"
    >
      {reduced ? (
        <img
          src="/videos/stickman-vs-code-poster.jpg"
          alt=""
          width={480}
          height={566}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
          poster="/videos/stickman-vs-code-poster.jpg"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
        >
          <source src="/videos/stickman-vs-code.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-[#f0efed]/35" />
      <div className="page-dim-light absolute inset-0" />

      {!reduced
        ? codeTokens.map((token) => (
            <span
              key={`${token.t}-${token.x}`}
              className="hero-code-token font-mono text-[0.7rem] font-medium tracking-wide text-[#004741]/45 sm:text-sm"
              style={{ left: token.x, top: token.y, animationDelay: `${token.delay}s` }}
            >
              {token.t}
            </span>
          ))
        : null}
    </div>
  );
}
