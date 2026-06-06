import { Banknote, BadgeCheck, CircleDollarSign, TrendingUp } from "lucide-react";
import { PageCta, PageHero, PageShell } from "@/components/SimplePage";

const questions = ["כמה הושקע", "כמה נכנס", "מה הרווח הנקי", "מה כדאי להפסיק"];

const roiMetrics = [
  { label: "השקעה חודשית", value: "₪2,500" },
  { label: "הכנסה מהלידים", value: "₪18,400" },
  { label: "רווח נקי", value: "₪15,900" },
  { label: "ROI כללי", value: "x7.3" },
];

export default function RoiPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="מרכז ROI"
        title="לדעת מה באמת מחזיר לך כסף"
        description="GoldenFlow עוזרת להבין את הקשר בין מקורות הלידים, ההשקעה וההכנסה בפועל, כדי לקבל תמונת החלטה נקייה יותר."
      />

      <section className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div>
          <div className="grid gap-3 sm:grid-cols-2">
            {questions.map((question) => (
              <div key={question} className="premium-surface flex items-center gap-3 p-4">
                <BadgeCheck className="shrink-0 text-gold-300" size={20} aria-hidden="true" />
                <span className="text-sm font-black text-zinc-200">{question}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-zinc-300">
            המטרה היא לא רק לראות מספרים, אלא להבין מה עובד, מה דורש בדיקה,
            ואיפה כדאי להשקיע יותר תשומת לב.
          </p>
          <div className="mt-8">
            <PageCta />
          </div>
        </div>

        <div className="glass-panel rounded-lg p-5">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-sm text-zinc-400">דמו ROI</p>
              <h2 className="text-xl font-black text-white">תמונת החזר השקעה</h2>
            </div>
            <Banknote className="text-gold-300" size={28} aria-hidden="true" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {roiMetrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <p className="text-sm text-zinc-400">{metric.label}</p>
                <p className="mt-2 text-3xl font-black text-white">{metric.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-lg border border-gold-300/20 bg-gold-300/10 p-4 text-gold-200">
            <CircleDollarSign className="mt-0.5 shrink-0" size={22} aria-hidden="true" />
            <p className="text-sm font-bold leading-7">
              הנתונים בדמו להמחשה בלבד ואינם מבוססים על עסק אמיתי.
            </p>
            <TrendingUp className="mr-auto hidden shrink-0 text-gold-300 sm:block" size={22} aria-hidden="true" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
