import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteNav } from "@/components/site-nav";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Timeline />
        <Projects />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
