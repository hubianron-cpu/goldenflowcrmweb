import { ArrowLeft, ListChecks, Route, Target, WalletCards } from "lucide-react";

const differences = [
  {
    icon: Target,
    before: "לא רק רשימת לידים",
    after: "סדר עדיפויות",
  },
  {
    icon: Route,
    before: "לא רק סטטוס",
    after: "פעולה הבאה",
  },
  {
    icon: WalletCards,
    before: "לא רק נתונים",
    after: "כסף שמחכה לטיפול",
  },
  {
    icon: ListChecks,
    before: "לא רק מערכת",
    after: "שגרת מכירה יומית",
  },
];

export function DifferentiationSection() {
  return (
    <section className="section-pad border-y border-white/10 bg-white/[0.025]">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">בידול</span>
          <h2 className="section-title">
            זה לא CRM שמחכה שתזכור. זה CRM שמחזיר אותך לפעולה.
          </h2>
          <p className="section-copy">
            GoldenFlow לא מבטיחה תוצאות ולא סוגרת במקומך. היא נותנת סדר, שליטה,
            מעקב ופעולה בזמן - בדיוק במקום שבו לידים בדרך כלל נופלים.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {differences.map((item) => (
            <article key={item.after} className="premium-surface p-5 hover:-translate-y-1 hover:border-gold-300/30">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold-300/20 bg-gold-300/10">
                <item.icon className="text-gold-300" size={22} aria-hidden="true" />
              </span>
              <p className="mt-5 text-sm font-bold text-zinc-500">{item.before}</p>
              <div className="mt-3 flex items-center gap-3">
                <ArrowLeft className="text-gold-300" size={18} aria-hidden="true" />
                <h3 className="text-xl font-black text-white">{item.after}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
