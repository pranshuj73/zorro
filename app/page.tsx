import { Hero } from "@/components/hero";
import { MissionSection } from "@/components/mission-section";
import { ProblemSection } from "@/components/problem-section";
import { AdvantageSection } from "@/components/advantage-section";
import { ServicesSection } from "@/components/services-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import siteConfig from "@/config/site.json";

export const metadata: Metadata = {
  title: "MVP Builder & Product Consultancy",
  description: "MVP builder and product consultancy for founders who ship. AI-accelerated execution. Systemized workflows that remove friction.",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.shortDescription,
  },
};

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.shortDescription,
    url: baseUrl,
    serviceType: "MVP Development, Product Consultancy, Technical Strategy",
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      description: "MVP builder and product consultancy services",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <MissionSection />
        <ProblemSection />
        <AdvantageSection />
        <ServicesSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
