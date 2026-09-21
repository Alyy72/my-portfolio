"use client";

import { About } from "@/components/About";
import { AskAssistant } from "@/components/AskAssistant";
import { Capabilities } from "@/components/Capabilities";
import { CertMap } from "@/components/CertMap";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/SiteFooter";
import { Hook } from "@/components/Hook";
import { BigHero } from "@/components/BigHero";
import { FloatingNav } from "@/components/FloatingNav";
import { HowIWork } from "@/components/HowIWork";
import { Portfolio } from "@/components/Portfolio";
import { StatusBoard } from "@/components/StatusBoard";

export function HomePage() {
  return (
    <>
      <FloatingNav />
      <main id="main" className="flex-1">
        <BigHero />
        <Hook />
        <About />
        <HowIWork />
        <Experience />
        <Capabilities />
        <Portfolio />
        <CertMap />
        <StatusBoard />
        <Contact />
      </main>
      <Footer />
      <AskAssistant />
    </>
  );
}
