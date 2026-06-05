import { BadgeCheck, Banknote, PieChart, TrendingDown, TrendingUp } from "lucide-react";

type RoiCard = {
  label: string;
  value: string;
  hint: string;
  highlight?: boolean;
  risk?: boolean;
};

const roiCards: RoiCard[] = [
  { label: "השקעה חודשית", value: "₪2,500", hint: "פרסום, כלים וזמן עבודה" },
  { label: "הכנסה מהלידים", value: "₪18,400", hint: "עסקאות שנסגרו מהלידים" },
  { label: "רווח נקי", value: "₪15,900", hint: "אחרי עלויות הפעילות", highlight: true },
  { label: "הכלי הכי רווחי", value: "קמפיין וואטסאפ", hint: "איפה כדאי להשקיע יותר" },
  { label: "כסף בסיכון", value: "₪1,347", hint: "לידים שמחכים למעקב", risk: true },
  { label: "אין כרגע כלי מפסיד", value: "תקין", hint: "אין מקור שמסומן כבעייתי" },
];

export function RoiSection() {
  return (
    <section id="roi" className="section-pad border-y border-gold-300/15 bg-gold-radial">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div className="max-w-xl">
            <span className="eyebrow">
              <PieChart size={16} aria-hidden="true" />
              מרכז ROI
            </span>
            <h2 className="section-title">
              מרכז ROI - לדעת מה באמת מחזיר לך כסף.
            </h2>
            <p className="section-copy">
              לא מספיק להביא לידים. צריך לדעת איזה מקור, כלי או פעולה באמת
              מייצרים רווח. GoldenFlow מציגה תמונת החלטה נקייה: כמה הושקע,
              כמה נכנס, ומה כדאי להמשיך לבדוק.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["כמה הושקע", "כמה נכנס", "מה הרווח הנקי", "מה כדאי להפסיק"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-bold text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-2xl font-black leading-9 text-gold-300">
              זה לא רק CRM. זה מרכז החלטות עסקי.
            </p>
          </div>

          <div className="glass-panel rounded-lg p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-zinc-400">ROI Center</p>
                <h3 className="text-xl font-bold text-white">תמונת החזר השקעה</h3>
              </div>
              <Banknote className="text-gold-300" size={28} aria-hidden="true" />
            </div>
            <div className="mb-4 rounded-lg border border-gold-300/30 bg-gold-300/[0.09] p-5 shadow-gold">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-gold-300">ROI כללי</p>
                  <p className="mt-2 text-5xl font-black text-white">x7.3</p>
                </div>
                <p className="max-w-xs text-sm leading-7 text-zinc-300">
                  כל שקל שהושקע בלידים ובכלים מוצג מול הכנסות ורווח נקי.
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {roiCards.map((card) => (
                <div
                  key={card.label}
                  className={`rounded-lg border p-4 ${
                    card.highlight
                      ? "border-gold-300/25 bg-gold-300/[0.08]"
                      : card.risk
                        ? "border-red-300/15 bg-[rgba(120,40,40,0.18)]"
                        : "border-white/10 bg-ink-950/70"
                  }`}
                >
                  <p className="text-sm text-zinc-400">{card.label}</p>
                  <p className={`mt-2 text-2xl font-black ${card.highlight ? "text-gold-200" : "text-white"}`}>
                    {card.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">{card.hint}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-gold-300/20 bg-gold-300/10 p-4 text-gold-200">
                <BadgeCheck size={22} aria-hidden="true" />
                <span className="font-bold">פעולות רווחיות מזוהות מהר יותר.</span>
                <TrendingUp className="mr-auto hidden text-gold-300 sm:block" size={22} aria-hidden="true" />
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-red-300/15 bg-red-300/10 p-4 text-red-100">
                <TrendingDown size={22} aria-hidden="true" />
                <span className="font-bold">מקורות חלשים לא נשארים נסתרים.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
