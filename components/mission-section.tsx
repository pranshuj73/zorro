"use client";

import * as m from "motion/react-m";

export function MissionSection() {
  return (
    <section className="py-24 md:py-32 bg-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <m.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Zorro is the <span className="text-red-600">surgical intervention</span> for founders who demand outcome, not activity.
          </h2>
        </m.div>
      </div>
    </section>
  );
}
