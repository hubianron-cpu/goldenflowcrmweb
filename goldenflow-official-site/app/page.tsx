import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import {
  HomeFeaturesPreview,
  HomePricingPreview,
  HomeProblemPreview,
  HomeRoiPreview,
  HomeSolutionPreview,
} from "@/components/HomeOverviewSections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeProblemPreview />
        <HomeSolutionPreview />
        <HomeFeaturesPreview />
        <HomeRoiPreview />
        <HomePricingPreview />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
