"use client";

import { motion } from "motion/react";

const services = [
  {
    id: "01",
    title: "MVP Execution",
    description: "Zero to deployed product. Design, development, infrastructure. You focus on the market."
  },
  {
    id: "02",
    title: "Product Rescue",
    description: "Projects stuck in development. Audit, refactor, ship the blocked release."
  },
  {
    id: "03",
    title: "Technical Strategy",
    description: "Fractional CTO services. Define roadmap, hire team, set standards."
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
            // Capabilities
          </h2>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group grid gap-6 border-b border-neutral-900 pb-8 md:grid-cols-[100px_1fr_2fr] md:items-baseline md:gap-12"
            >
              <span className="text-sm font-mono text-neutral-600 group-hover:text-white transition-colors">
                {service.id}
              </span>
              <h3 className="text-2xl font-medium text-white md:text-3xl group-hover:text-neutral-200 transition-colors">
                {service.title}
              </h3>
              <p className="text-lg text-neutral-500 md:text-xl leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
