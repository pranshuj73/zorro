"use client";

import { motion } from "motion/react";
import { useEffect, useId, useMemo, useRef } from "react";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const curveId = useId().replaceAll(":", "");

  // PERF: keep cursor updates out of React render loop (this component is SVG-heavy).
  const cursorTextRef = useRef<HTMLDivElement | null>(null);
  const cursorLastRef = useRef({ x: 0, y: 0 });
  const reticleCycle = useMemo(() => {
    // Mechanical cycle (long holds, quick transitions):
    // max hold 2.00s -> min hold 2.45s -> mid hold 3.00s -> back to max
    const hold1 = 2.0;
    const hold2 = 2.45;
    const hold3 = 3.0;
    const ramp = 0.12; // quick actuator-like move between holds

    const total = hold1 + ramp + hold2 + ramp + hold3 + ramp;

    const t1 = hold1 / total;
    const t2 = (hold1 + ramp) / total;
    const t3 = (hold1 + ramp + hold2) / total;
    const t4 = (hold1 + ramp + hold2 + ramp) / total;
    const t5 = (hold1 + ramp + hold2 + ramp + hold3) / total;

    const times = [0, t1, t2, t3, t4, t5, 1];
    const maxScale = 1.08;
    const minScale = 0.5;
    const midScale = 0.84;
    const scale = [maxScale, maxScale, minScale, minScale, midScale, midScale, maxScale];
    const opacity = [0.85, 0.85, 0.25, 0.25, 0.6, 0.6, 0.85];

    return { duration: total, times, scale, opacity };
  }, []);

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

      const last = cursorLastRef.current;
      if (last.x === x && last.y === y) return;
      cursorLastRef.current = { x, y };
      if (cursorTextRef.current) cursorTextRef.current.textContent = `${x},${y}`;
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

  const ringTokens = useMemo(
    () => [
      "STRUCTURAL SPEED",
      "//",
      "SYSTEMIZED EXECUTION",
      "//",
      "CLARITY OVER AMBIGUITY",
      "//",
      "TASTE AS AUTHORITY",
      "//",
      "ENGINEERED LEVERAGE",
      "//",
    ],
    [],
  );
  const ringLayout = useMemo(() => {
    // Approximate token widths using monospace character counts.
    // We place tokens based on cumulative "weight" so the perceived gaps are consistent.
    const gapWeight = 4; // controls spacing between tokens (in "chars")
    const charScale = 1.2; // account for tracking + glyph rendering

    const weights = ringTokens.map(t => Math.max(1, Math.round(t.length * charScale)));
    const total = weights.reduce((a, b) => a + b, 0) + ringTokens.length * gapWeight;

    let acc = 0;
    return ringTokens.map((token, i) => {
      const w = weights[i]!;

      // Center each token on its point along the circle (true visual centering).
      // The fixed gap is applied between tokens (half before + half after).
      const center = acc + gapWeight / 2 + w / 2;
      acc += w + gapWeight;

      const pct = (center / total) * 100;
      return { token, startOffset: `${pct}%` };
    });
  }, [ringTokens]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full flex items-center justify-center select-none pointer-events-none"
    >

      {/* ============================================================================
          LAYER 1: The "Atmosphere" - Optimization: Reduced blur intensity / layers
         ============================================================================ */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full bg-neutral-900/40"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* ============================================================================
          LAYER 1B/1C: Distant outer rings (very large, very spaced)
         ============================================================================ */}
      <svg
        viewBox="0 0 1400 1400"
        className="absolute h-[1400px] w-[1400px] opacity-35 text-neutral-400 animate-spin"
        style={{
          transformOrigin: "50% 50%",
          willChange: "transform",
          animationDuration: "520s",
          animationTimingFunction: "linear",
          animationDirection: "reverse",
        }}
      >
        {/* Second-outermost distant ring: dotted */}
        <circle
          cx="700"
          cy="700"
          r="660"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="1 18"
          opacity="0.65"
        />

        {/* Closely-linked fragment ring (odd chunks, same rotation) */}
        <circle
          cx="700"
          cy="700"
          r="642"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeDasharray="34 120 18 190 48 140 12 220"
          strokeDashoffset="90"
          opacity="0.52"
        />
        <circle
          cx="700"
          cy="700"
          r="626"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="16 160 10 240 26 180 8 300"
          strokeDashoffset="210"
          opacity="0.35"
        />
      </svg>

      <svg
        viewBox="0 0 1900 1900"
        className="absolute h-[1900px] w-[1900px] opacity-25 text-neutral-500 animate-spin"
        style={{
          transformOrigin: "50% 50%",
          willChange: "transform",
          animationDuration: "780s",
          animationTimingFunction: "linear",
          animationDirection: "normal",
        }}
      >
        <circle
          cx="950"
          cy="950"
          r="880"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          // Even longer arcs at a different phase.
          strokeDasharray="1320 2100"
          strokeDashoffset="680"
          opacity="0.55"
          strokeLinecap="round"
        />
      </svg>


      {/* ============================================================================
          LAYER 2: Outer "Incomplete" Structural Rings
          Large, thin, broken arcs to imply open infrastructure.
         ============================================================================ */}
      <svg
        viewBox="0 0 800 800"
        className="absolute h-[800px] w-[800px] opacity-20 animate-spin"
        style={{
          transformOrigin: "50% 50%",
          willChange: "transform",
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
          willChange: "transform",
          animationDuration: "140s",
          animationTimingFunction: "linear",
          animationDirection: "reverse",
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
          willChange: "transform",
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
        style={{
          willChange: "transform",
          animationDuration: "80s",
          animationTimingFunction: "linear",
          animationDirection: "alternate",
        }}
      >
        <svg viewBox="-40 -40 630 630" className="w-full h-full overflow-visible" style={{ overflow: "visible" }}>
          <path
            id={curveId}
            // Start at top so offsets don't need wrapping (prevents truncation).
            d="M 275 23 A 252 252 0 1 1 275 527 A 252 252 0 1 1 275 23"
            fill="none"
          />

          {ringLayout.map(({ token, startOffset }, i) => (
            <text
              key={`${token}-${i}`}
              textAnchor="middle"
              className="text-[10px] uppercase tracking-[0.22em] fill-neutral-500 font-mono font-bold"
            >
              <textPath href={`#${curveId}`} startOffset={startOffset}>
                {token}
              </textPath>
            </text>
          ))}
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
          willChange: "transform",
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
        style={{
          willChange: "transform",
          animationDuration: "70s",
          animationTimingFunction: "linear",
          animationDirection: "alternate-reverse",
        }}
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
          initial={{ scale: 1.08, opacity: 0.85 }}
          animate={{
            scale: reticleCycle.scale,
            // Keep brightness pulsing independently of the mechanical scale holds.
            opacity: [0.5, 0.9, 0.7, 0, 0.7, 0.9, 0.5, 1],
          }}
          transition={{
            scale: {
              duration: reticleCycle.duration,
              times: reticleCycle.times,
              ease: "linear",
              repeat: Infinity,
            },
            opacity: {
              duration: 2.4,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
        />

        {/* Dynamic Data Readout */}
        <div
          ref={cursorTextRef}
          className="absolute top-18 font-mono text-[10px] text-red-500 tracking-widest opacity-80"
        >
          0,0
        </div>

        {/* Crosshairs */}
        <div className="absolute w-[300px] h-[1px] bg-neutral-800 opacity-50" />
        <div className="absolute w-[1px] h-[300px] bg-neutral-800 opacity-50" />
      </div>

    </div>
  );
}
