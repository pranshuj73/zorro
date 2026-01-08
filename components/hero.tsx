import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-24 pb-12 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Elements - Subtle/Abstract */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/20 via-background to-background" />

      <div className="max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-5xl font-medium tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl">
            Speed is <br className="hidden md:block" />
            <span className="text-neutral-500">a weapon.</span>
          </h1>
        </div>

        <div className="max-w-xl space-y-8">
          <p className="text-lg text-neutral-400 md:text-xl leading-relaxed">
            Most teams drown in process. We ship. <br />
            Zorro is the surgical intervention for founders who need outcome, not activity.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95"
            >
              Engage Zorro
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Grid/Technical decorative element */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="flex flex-col items-end gap-1 text-xs font-mono text-neutral-800">
          <span>SYS.STATUS: ONLINE</span>
          <span>LATENCY: 12ms</span>
          <span>VER: 2.0.4</span>
        </div>
      </div>
    </section>
  );
}
