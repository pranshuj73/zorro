"use client";

import { motion } from "motion/react";

export function ProblemSection() {
  return (
    <section className="relative bg-neutral-950 py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:gap-24">
          {/* Left: The Void */}
          <div className="hidden md:block" />

          {/* Right: The Truth */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
              Shipping is harder <br />
              than people admit.
            </h2>
            <div className="space-y-6 text-lg text-neutral-400 md:text-xl">
              <p>
                Most MVPs fail due to indecision, overengineering, or slow execution.
                Teams underestimate the cost of figuring it out themselves.
              </p>
              <p>
                Speed is structural, not effort-based.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
