"use client";

import { motion } from "motion/react";
import { Zap, Layers, Target } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Speed",
    description: "AI used pragmatically to accelerate execution. Systemized workflows that remove friction. We build faster because we leverage what works.",
  },
  {
    icon: Layers,
    title: "Systems",
    description: "Taste-driven decision-making. Aggressive reduction of ambiguity. Battle-tested architecture.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Reduced decision surface. Build exactly what validates. Nothing more.",
  }
];

export function AdvantageSection() {
  return (
    <section className="py-24 md:py-32 bg-neutral-950/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
            // Advantage
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group space-y-6 border-t border-neutral-800 pt-8 transition-colors hover:border-white/20"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white group-hover:bg-white group-hover:text-black transition-colors">
                <item.icon className="h-6 w-6" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                <p className="text-lg text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
