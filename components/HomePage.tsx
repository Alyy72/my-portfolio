"use client";

import { useCallback, useState } from "react";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/SiteFooter";
import { Hero } from "@/components/HeroSection";
import { Hook } from "@/components/Hook";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Splash } from "@/components/Splash";
import { WelcomeToast } from "@/components/WelcomeToast";

export function HomePage() {
  const [ready, setReady] = useState(false);
  const onSplashDone = useCallback(() => setReady(true), []);

  return (
    <>
      <Splash onDone={onSplashDone} />
      <div
        className={`transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Hook />
          <About />
          <Experience />
          <Capabilities />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
      {ready ? <WelcomeToast /> : null}
    </>
  );
}
