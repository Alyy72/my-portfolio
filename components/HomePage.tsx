"use client";

import { useCallback, useState } from "react";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/SiteFooter";
import { Hook } from "@/components/Hook";
import { BigHero } from "@/components/BigHero";
import { FloatingNav } from "@/components/FloatingNav";
import { LiveBuildIntro } from "@/components/LiveBuildIntro";
import { Portfolio } from "@/components/Portfolio";
import { WelcomeToast } from "@/components/WelcomeToast";

export function HomePage() {
  const [ready, setReady] = useState(false);
  const [introOpen, setIntroOpen] = useState(true);
  const onIntroDone = useCallback(() => {
    setReady(true);
    setIntroOpen(false);
  }, []);

  return (
    <>
      <FloatingNav />
      <main className="flex-1">
        {introOpen ? <LiveBuildIntro onDone={onIntroDone} /> : null}
        <BigHero ready={ready} />
        <Hook />
        <About />
        <Experience />
        <Capabilities />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      {ready ? <WelcomeToast /> : null}
    </>
  );
}
