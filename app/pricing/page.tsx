import { Check } from "lucide-react";
import { PageCta, PageHero, PageShell } from "@/components/SimplePage";

const included = [
  "ניהול לידים",
  "ניהול משימות",
  "מסלול מכירה",
  "מרכז ROI",
  "סגירה יומית",
  "התאמה למובייל",
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="מחיר"
        title="מחיר השקה למשתמשים הראשונים"
        description="תמחור פשוט וברור למי שרוצה להתחיל לעבוד עם GoldenFlow CRM בצורה מסודרת."
      />

      <section className="mx-auto mt-10 max-w-xl overflow-hidden rounded-lg border border-gold-300/25 bg-gradient-to-b from-white/[0.06] via-white/[0.035] to-white/[0.02] shadow-panel">
        <div className="border-b border-gold-300/15 bg-gold-300/[0.06] px-6 py-4 text-center text-sm font-black text-gold-300">
          מחיר השקה
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex items-end justify-center gap-2">
            <span className="text-6xl font-black text-white">₪99</span>
            <span className="pb-3 text-lg font-bold text-zinc-300">לחודש</span>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <Check className="shrink-0 text-gold-300" size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <PageCta />
          </div>
          <p className="mt-4 text-center text-xs leading-6 text-zinc-400">
מחיר קבוע -20 רוכשים הראשונים          </p>
        </div>
      </section>
    </PageShell>
  );
}
