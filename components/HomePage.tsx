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
import { StickmanBackdrop } from "@/components/StickmanBackdrop";

export function HomePage() {
  return (
    <>
      <StickmanBackdrop />
      <FloatingNav />
      <main id="main" className="relative z-10 flex-1">
        <BigHero />
        <div className="relative bg-[#f0efed]/72">
          <Hook />
          <About />
          <HowIWork />
          <Experience />
          <Capabilities />
          <Portfolio />
          <CertMap />
          <StatusBoard />
          <Contact />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <AskAssistant />
    </>
  );
}
