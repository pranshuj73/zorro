import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { AdvantageSection } from "@/components/advantage-section";
import { ServicesSection } from "@/components/services-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ProblemSection />
      <AdvantageSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
