"use client";

import { motion } from "motion/react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const curveId = useId().replaceAll(":", "");

  const [cursor, setCursor] = useState(() => ({ x: 0, y: 0 }));

  useEffect(() => {
    const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

    let raf = 0;
    let lastEvent: MouseEvent | null = null;

    const update = () => {
      raf = 0;
      if (!lastEvent || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const px = clamp01((lastEvent.clientX - rect.left) / rect.width);
      const py = clamp01((lastEvent.clientY - rect.top) / rect.height);

      // Centered coords: -100..100 (left->right, top->bottom)
      const x = Math.round((px - 0.5) * 200);
      const y = Math.round((py - 0.5) * 200);

      setCursor(prev => (prev.x === x && prev.y === y ? prev : { x, y }));
    };

    const onMouseMove = (e: MouseEvent) => {
      lastEvent = e;
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const cursorX = cursor.x;
  const cursorY = cursor.y;

  const ringText = useMemo(() => {
    // Zorro is positional: capability, speed, inevitability. No fake telemetry.
    const segment =
      "SPEED IS STRUCTURAL // SYSTEMIZED EXECUTION // REDUCE AMBIGUITY // TASTE-DRIVEN DECISIONS // LEVERAGE // ";
    return segment.repeat(8);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full flex items-center justify-center select-none pointer-events-none"
    >

      {/* ============================================================================
          LAYER 1: The "Atmosphere" - Optimization: Reduced blur intensity / layers
         ============================================================================ */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full bg-neutral-900/40 blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />


      {/* ============================================================================
          LAYER 2: Outer "Incomplete" Structural Rings
          Large, thin, broken arcs to imply open infrastructure.
         ============================================================================ */}
      <svg
        viewBox="0 0 800 800"
        className="absolute h-[800px] w-[800px] opacity-20 animate-spin"
        style={{
          transformOrigin: "50% 50%",
          animationDuration: "180s",
          animationTimingFunction: "linear",
          animationDirection: "normal",
        }}
      >
        <circle cx="400" cy="400" r="380" stroke="#fff" strokeWidth="1" fill="none" strokeDasharray="100 600" />
        <circle cx="400" cy="400" r="360" stroke="#fff" strokeWidth="1" fill="none" strokeDasharray="400 400" strokeOpacity="0.5" />
      </svg>

      {/* ============================================================================
          LAYER 2B: Subtle outer rings (spacing + structure)
         ============================================================================ */}
      <svg
        viewBox="0 0 760 760"
        className="absolute h-[740px] w-[740px] opacity-20 text-neutral-600 animate-spin"
        style={{
          transformOrigin: "50% 50%",
          animationDuration: "140s",
          animationTimingFunction: "linear",
          animationDirection: "alternate",
        }}
      >
        <circle
          cx="380"
          cy="380"
          r="330"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 18"
          opacity="0.45"
        />
        <circle
          cx="380"
          cy="380"
          r="310"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="1 10"
          opacity="0.35"
        />
      </svg>

      {/* ============================================================================
          LAYER 2C: Large-gap incomplete rings (slow drift)
         ============================================================================ */}
      <svg
        viewBox="0 0 720 720"
        className="absolute h-[660px] w-[660px] opacity-20 text-neutral-600 animate-spin"
        style={{
          transformOrigin: "50% 50%",
          animationDuration: "240s",
          animationTimingFunction: "linear",
          animationDirection: "alternate",
        }}
      >
        <circle
          cx="360"
          cy="360"
          r="315"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="180 900"
          opacity="0.35"
          strokeLinecap="round"
        />
        <circle
          cx="360"
          cy="360"
          r="295"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="120 760"
          opacity="0.25"
          strokeLinecap="round"
        />
      </svg>


      {/* ============================================================================
          LAYER 3: The "TICK" Ring - PERFORMANCE OPTIMIZED
          Instead of 120 DOM nodes, we use 1 circle with dasharray.
          Circumference of r=350 is ~2199px.
          120 ticks = ~18.3px per segment. 2px dash, 16.3px gap.
         ============================================================================ */}
      <div
        className="absolute h-[700px] w-[700px] flex items-center justify-center text-neutral-600"
        style={{
          animationName: "spin",
          animationDuration: "60s",
          animationTimingFunction: "steps(60)",
          animationIterationCount: "infinite",
          animationDirection: "normal",
        }}
      >
        <svg viewBox="0 0 700 700" className="w-full h-full">
          {/* Minor Ticks */}
          <circle
            cx="350" cy="350" r="340"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="2 16.32" // (2 * PI * 340) / 120 approx
            opacity="0.5"
          />
          {/* Major Ticks (every 10th) */}
          <circle
            cx="350" cy="350" r="340"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="4 179.5" // (2 * PI * 340) / 12 approx
            opacity="0.8"
          />
        </svg>
      </div>


      {/* ============================================================================
          LAYER 4: The "DATA" Ring - Meaningful Content
          Brand values: INEVITABLE, EXECUTION, SOVEREIGN.
         ============================================================================ */}
      <div
        className="absolute h-[550px] w-[550px] animate-spin"
        style={{ animationDuration: "80s", animationTimingFunction: "linear", animationDirection: "alternate" }}
      >
        <svg viewBox="0 0 550 550" className="w-full h-full">
          <path id={curveId} d="M 275, 275 m -260, 0 a 260,260 0 1,1 520,0 a 260,260 0 1,1 -520,0" fill="none" />
          <text className="text-[10px] uppercase tracking-[0.4em] fill-neutral-500 font-mono font-bold">
            <textPath href={`#${curveId}`} startOffset="0%">
              {ringText}
            </textPath>
          </text>
        </svg>
      </div>

      {/* ============================================================================
          LAYER 4B: Inner support rings (reduce visual gap)
         ============================================================================ */}
      <svg
        viewBox="0 0 600 600"
        className="absolute h-[500px] w-[500px] opacity-25 text-neutral-700 animate-spin"
        style={{
          transformOrigin: "50% 50%",
          animationDuration: "130s",
          animationTimingFunction: "linear",
          animationDirection: "normal",
        }}
      >
        <circle cx="300" cy="300" r="250" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 12" opacity="0.55" />
        <circle cx="300" cy="300" r="230" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 9" opacity="0.4" />
      </svg>


      {/* ============================================================================
          LAYER 5: The "ACCENT" Ring - Stepped Animation
          Clockwork motion.
         ============================================================================ */}
      <div
        className="absolute h-[400px] w-[400px] animate-spin"
        style={{ animationDuration: "70s", animationTimingFunction: "linear", animationDirection: "alternate" }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="190" stroke="#ef4444" strokeWidth="1" strokeDasharray="100 250" strokeLinecap="round" fill="none" className="opacity-80 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
        </svg>
      </div>
      {/* Static markers (do not rotate) */}
      <svg viewBox="0 0 400 400" className="absolute h-[400px] w-[400px] opacity-90">
        <path d="M 200 10 L 200 30" stroke="#ef4444" strokeWidth="2" />
        <path d="M 200 370 L 200 390" stroke="#ef4444" strokeWidth="2" />
      </svg>


      {/* ============================================================================
          LAYER 6: Inner Core (The Anchor & Dynamic Data)
         ============================================================================ */}
      <div className="absolute z-10 flex flex-col items-center justify-center gap-2">
        {/* Core Dot */}
        <div className="h-4 w-4 bg-red-600 rounded-full shadow-[0_0_20px_rgba(239,68,68,1)]" />

        {/* Aiming Reticle */}
        <motion.div
          className="absolute h-16 w-16 border border-red-500/50 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Dynamic Data Readout */}
        <div className="absolute top-12 font-mono text-[10px] text-red-500 tracking-widest opacity-80">
          {cursorX},{cursorY}
        </div>

        {/* Crosshairs */}
        <div className="absolute w-[300px] h-[1px] bg-neutral-800 opacity-50" />
        <div className="absolute w-[1px] h-[300px] bg-neutral-800 opacity-50" />
      </div>

    </div>
  );
}
