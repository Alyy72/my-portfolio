import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/lab", "Interactive lab", "An interactive look at the web development process.");

export default function LabPage() {
  return (
    <main id="main" className="min-h-[70svh] bg-[#004741]">
      <iframe
        src="/live-build.html"
        title="Live build lab"
        className="h-[calc(100svh-3.25rem)] w-full border-0"
      />
    </main>
  );
}
