"use client";

import { motion } from "framer-motion";
import { SitePhoto } from "@/components/image-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { gallery } from "@/lib/site-data";

export function Gallery() {
  return (
    <section id="gallery" className="border-b border-border px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Human"
          title="The personal corner."
          description="Coffee steam. Road miles. Living soil. And the light that still stops me mid-scroll."
        />

        <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-3 md:auto-rows-[240px]">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={item.span}
            >
              <SitePhoto
                src={item.image}
                alt={item.imageAlt}
                label={item.label}
                caption={item.caption}
                featured={"featured" in item ? item.featured : false}
                className="h-full"
                sizes={
                  item.span.includes("col-span-2")
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 100vw, 33vw"
                }
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
