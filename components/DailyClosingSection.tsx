import { CheckCircle2, MessageCircle, Phone, WalletCards } from "lucide-react";

const closingItems = [
  {
    title: "ליד חם #01",
    meta: "שווי ₪300",
    status: "לא קיבל מענה 3 ימים",
    tone: "border-gold-300/20 bg-gold-300/[0.08]",
  },
  {
    title: "ליד חם #02",
    meta: "שווי ₪650",
    status: "ממתין לקביעת שיחה",
    tone: "border-gold-300/25 bg-gold-300/[0.08]",
  },
  {
    title: "מתעניין חדש",
    meta: "מקור: קמפיין",
    status: "צריך תגובה ראשונה",
    tone: "border-white/10 bg-white/[0.035]",
  },
];

const actions = [
  { label: "התקשר", icon: Phone },
  { label: "שלח הודעה", icon: MessageCircle },
  { label: "סמן כטופל", icon: CheckCircle2 },
];

export function DailyClosingSection() {
  return (
    <section className="section-pad border-y border-white/10 bg-white/[0.025]">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">Daily Closing</span>
          <h2 className="section-title">לוח סגירה יומי שמראה לך איפה הכסף מחכה</h2>
          <p className="section-copy">
            במקום לפתוח וואטסאפ, אקסל ופתקים - GoldenFlow מרכזת את הפעולות החשובות
            ומראה לך למי לחזור קודם.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <article className="metric-card p-5">
            <p className="text-sm font-bold text-zinc-400">לידים לטיפול היום</p>
            <p className="mt-3 text-5xl font-black text-gold-300">6</p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">מסודרים לפי עדיפות, זמן המתנה ושווי פוטנציאלי.</p>
          </article>

          <article className="metric-card border-gold-300/25 p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-gold-300">
              <WalletCards size={18} aria-hidden="true" />
              כסף בסיכון
            </p>
            <p className="mt-3 text-5xl font-black text-white">₪1,347</p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">לידים שדורשים תגובה או מעקב לפני שהם מתקררים.</p>
          </article>

          <article className="rounded-lg border border-gold-300/25 bg-gold-300/[0.08] p-5 shadow-[0_18px_60px_rgba(212,175,55,0.14)]">
            <p className="text-sm font-bold text-gold-300">פעולה מומלצת</p>
            <h3 className="mt-3 text-2xl font-black leading-8 text-white">לחזור ל-3 לידים חמים</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-300">כולם לא קיבלו מענה ב-48 השעות האחרונות.</p>
          </article>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {closingItems.map((item) => (
            <article key={item.title} className={`rounded-lg border p-5 ${item.tone}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm font-bold text-gold-300">{item.meta}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-ink-950/70 px-3 py-1 text-xs font-black text-zinc-300">
                  דמו
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.status}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {actions.map((action) => (
                  <span key={action.label} className="inline-flex items-center gap-2 rounded-full border border-gold-300/20 bg-ink-950/70 px-3 py-2 text-xs font-black text-gold-300">
                    <action.icon size={14} aria-hidden="true" />
                    {action.label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
