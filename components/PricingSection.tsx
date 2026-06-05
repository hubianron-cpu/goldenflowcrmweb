import { Check, LogIn } from "lucide-react";
import { APP_LOGIN_URL } from "@/lib/constants";

const included = [
  "ניהול לידים",
  "ניהול משימות",
  "מסלול מכירה",
  "סגירה יומית",
  "מרכז ROI",
  "התאמה למובייל",
  "תמיכה בסיסית",
  "עדכונים ושיפורים",
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-pad">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">מחיר השקה</span>
          <h2 className="section-title">מחיר השקה למשתמשים הראשונים</h2>
          <p className="section-copy">
            תמחור פשוט ושקוף למי שרוצה להתחיל לעבוד עם GoldenFlow CRM בצורה מסודרת.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-lg border border-gold-300/25 bg-gradient-to-b from-white/[0.06] via-white/[0.035] to-white/[0.02] shadow-panel">
          <div className="border-b border-gold-300/15 bg-gold-300/[0.06] px-6 py-4 text-center text-sm font-black text-gold-300">
            תמחור השקה ברור
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-2xl font-black text-white">GoldenFlow CRM</p>
                <p className="mt-2 text-sm font-bold text-gold-300">מחיר השקה</p>
              </div>
              <span className="w-fit rounded-full border border-gold-300/30 bg-gold-300/10 px-4 py-2 text-xs font-black text-gold-300">
                משתמשים ראשונים
              </span>
            </div>
            <div className="mt-6 flex items-end justify-center gap-2 sm:justify-start">
              <span className="text-5xl font-black text-white sm:text-6xl">₪97</span>
              <span className="pb-3 text-lg font-bold text-zinc-300">לחודש</span>
            </div>
            <p className="microcopy mt-4">
              מחיר השקה למשתמשים הראשונים. אפשר לקבל פרטים בלי התחייבות.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                  <Check className="shrink-0 text-gold-300" size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a href={APP_LOGIN_URL} className="gold-button mt-8 w-full">
              <LogIn size={18} aria-hidden="true" />
              רוצה לפתוח מנוי
            </a>
            <p className="mt-4 text-center text-xs leading-6 text-zinc-400">
              המחיר מיועד למשתמשים הראשונים ועשוי להתעדכן בהמשך.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
