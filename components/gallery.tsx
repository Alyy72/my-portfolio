"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SectionHeading } from "@/components/section-heading";
import { gallery } from "@/lib/site-data";

export function Gallery() {
  return (
    <section id="gallery" className="border-b border-border px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Human"
          title="The personal corner."
          description="Coffee steam. Road miles. Living soil. And the portrait that still stops me — drawn by my girlfriend."
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
              <ImagePlaceholder
                label={item.label}
                caption={item.caption}
                icon={item.icon}
                featured={"featured" in item ? item.featured : false}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
