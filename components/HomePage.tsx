"use client";

import { About } from "@/components/About";
import { AskAssistant } from "@/components/AskAssistant";
import { Capabilities } from "@/components/Capabilities";
import { CertMap } from "@/components/CertMap";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/SiteFooter";
import { BigHero } from "@/components/BigHero";
import { FloatingNav } from "@/components/FloatingNav";
import { HowIWork } from "@/components/HowIWork";
import { Portfolio } from "@/components/Portfolio";

export function HomePage() {
  return (
    <>
      <FloatingNav />
      <main id="main" className="relative z-10 flex-1">
        <BigHero />
        <div className="relative bg-[#f0efed]/72">
          <Portfolio />
          <About />
          <Capabilities />
          <HowIWork />
          <CertMap />
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
