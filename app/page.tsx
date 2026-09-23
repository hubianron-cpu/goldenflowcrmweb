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
        <section className="border-y border-white/10 bg-ink-950/60 py-8">
          <div className="container-shell text-center text-sm leading-7 text-zinc-300">
            חיבור Google Calendar, כאשר הוא זמין ומופעל בהסכמתך, מעניק הרשאת קריאה לאירועים ביומנים שיש לך גישה אליהם. בפועל GoldenFlow מסנכרנת רק את היומן הראשי לצורך זיהוי הוצאות מכותרות עם סכום וסיכום פגישות שבועי. <a href="/privacy" className="font-bold text-gold-300 underline underline-offset-4">איך משתמשים בנתוני היומן?</a>
          </div>
        </section>
        <HomeRoiPreview />
        <HomePricingPreview />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
