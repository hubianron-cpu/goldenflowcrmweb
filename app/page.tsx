import { AudienceSection } from "@/components/AudienceSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { DailyClosingSection } from "@/components/DailyClosingSection";
import { DifferentiationSection } from "@/components/DifferentiationSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MobilePreviewSection } from "@/components/MobilePreviewSection";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { PipelineSection } from "@/components/PipelineSection";
import { PricingSection } from "@/components/PricingSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductMomentsSection } from "@/components/ProductMomentsSection";
import { RoiSection } from "@/components/RoiSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <TrustSection />
        <HowItWorks />
        <FeaturesSection />
        <ProductMomentsSection />
        <DailyClosingSection />
        <PipelineSection />
        <MobilePreviewSection />
        <RoiSection />
        <AudienceSection />
        <BenefitsSection />
        <DifferentiationSection />
        <PricingSection />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
