"use client";

import { motion } from "motion/react";

export function HeroVisual() {
  return (
    <div className="relative h-full w-full flex items-center justify-center opacity-100">
      {/* Core Glow */}
      <motion.div
        className="absolute h-64 w-64 rounded-full bg-red-900/40 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating Ring 1 (Slow, Large) */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute h-[800px] w-[800px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="200"
          cy="200"
          r="198"
          stroke="url(#gradient1)"
          strokeWidth="1"
          strokeDasharray="4 8"
          fill="none"
          className="opacity-40"
        />
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#333" />
            <stop offset="50%" stopColor="#666" />
            <stop offset="100%" stopColor="#333" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Rotating Ring 2 (Medium, Reverse) */}
      <motion.svg
        viewBox="0 0 300 300"
        className="absolute h-[550px] w-[550px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="150"
          cy="150"
          r="148"
          stroke="#444"
          strokeWidth="1"
          strokeDasharray="20 40"
          strokeLinecap="square"
          fill="none"
          className="opacity-50"
        />
      </motion.svg>

      {/* Inner Active Ring (Fast, Technical) */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute h-[300px] w-[300px]"
        animate={{ rotate: 90 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse",
        }}
      >
        <circle
          cx="100"
          cy="100"
          r="98"
          stroke="#ef4444" // Red-500
          strokeWidth="1"
          strokeDasharray="60 140"
          strokeLinecap="round"
          fill="none"
          className="opacity-80"
        />
      </motion.svg>

      {/* Floating Particles (Data Points) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 bg-neutral-600 rounded-full"
          style={{
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: [0, Math.cos(i * 60) * 180],
            y: [0, Math.sin(i * 60) * 180],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Central Anchor */}
      <div className="h-3 w-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
    </div>
  );
}
