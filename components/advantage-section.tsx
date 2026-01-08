"use client";

import { motion } from "motion/react";
import { Zap, Layers, Target } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Velocity",
    description: "Speed is not just about typing faster. It's about removing friction from every layer of the stack.",
    points: [
      "Pre-calibrated Next.js 15+ stack with zero config time.",
      "Automated CI/CD pipelines that deploy on git push.",
      "Immediate decision-making protocols to bypass bike-shedding."
    ]
  },
  {
    icon: Layers,
    title: "Systems",
    description: "We don't reinvent the wheel. We use a battle-tested architecture that scales from day one.",
    points: [
      "Component-driven development using a customized Shadcn/UI system.",
      "Type-safe database ORM and API layers (tRPC/Server Actions).",
      "Built-in authentication, payments, and analytics integration."
    ]
  },
  {
    icon: Target,
    title: "Precision",
    description: "Most projects fail because they build too much. We build exactly what is needed to validate.",
    points: [
      "Ruthless scope cutting to focus on the core value proposition.",
      "Feature-flagging for safe, incremental rollouts.",
      "User-centric feedback loops integrated directly into the product."
    ]
  }
];

export function AdvantageSection() {
  return (
    <section className="py-24 md:py-32 bg-neutral-950/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
            // The Zorro Advantage
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

                <ul className="space-y-3 pt-4">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-500">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-700 group-hover:bg-white transition-colors" />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
