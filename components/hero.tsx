"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-24 pb-12 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Elements - Subtle/Abstract */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/20 via-background to-background" />

      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 mx-auto w-full">
        <div className="space-y-8">
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl font-medium tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl"
            >
              Speed is <br className="hidden md:block" />
              <span className="text-neutral-500">a weapon.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl space-y-8"
          >
            <p className="text-lg text-neutral-400 md:text-xl leading-relaxed max-w-2xl">
              Most teams drown in process. We ship.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <div className="hidden lg:flex h-full w-full items-center justify-center min-h-[400px] lg:pl-24">
          <HeroVisual />
        </div>
      </div>

      {/* Pulsing Red Line */}
      <div className="absolute bottom-0 right-0 w-full h-[40vh] pointer-events-none">
        <svg
          viewBox="0 0 1440 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full absolute bottom-0 right-0 overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Base Track */}
          <path
            d="M0 300 Q 1000 300 1440 0"
            stroke="#7f1d1d" // Red-900
            strokeWidth="2"
            fill="none"
            opacity="0.2"
          />


          {/* Traveling Glow */}
          <motion.path
            d="M0 300 Q 1000 300 1440 0"
            stroke="#ff4444" // Bright Red
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
            initial={{ strokeDasharray: "150 1500", strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -1650 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            className="blur-2xl"
            opacity="0.8"
          />
        </svg>
      </div>


    </section>
  );
}
