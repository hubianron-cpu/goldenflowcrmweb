import { CalendarCheck, CircleDollarSign, Clock3, MessageCircle } from "lucide-react";

const moments = [
  {
    icon: CalendarCheck,
    title: "פתחת את הבוקר",
    metric: "6 לידים לטיפול",
    text: "היום מתחיל מרשימת פעולות ברורה, לא מחיפוש בין הודעות ופתקים.",
  },
  {
    icon: Clock3,
    title: "ליד חם מחכה",
    metric: "48 שעות ללא מענה",
    text: "GoldenFlow מציפה את הלידים שלא כדאי לתת להם להתקרר.",
  },
  {
    icon: CircleDollarSign,
    title: "כסף בסיכון",
    metric: "₪1,347",
    text: "שווי דמו של לידים שמחכים למעקב או תגובה בזמן.",
  },
  {
    icon: MessageCircle,
    title: "מקור שמחזיר כסף",
    metric: "ROI x7.3",
    text: "קמפיין וואטסאפ מוצג כמקור רווחי בדמו, עם תמונת החזר ברורה.",
  },
];

export function ProductMomentsSection() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">Product Moments</span>
          <h2 className="section-title">רגעים יומיים שמחזירים אותך לפעולה</h2>
          <p className="section-copy">
            האתר לא מציג רק פיצ׳רים. הוא מראה איך GoldenFlow עוזרת מחר בבוקר:
            מה דחוף, איפה יש כסף, ומה הפעולה שמקדמת את המכירה.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {moments.map((moment) => (
            <article key={moment.title} className="premium-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold-300/20 bg-gold-300/10">
                <moment.icon className="text-gold-300" size={22} aria-hidden="true" />
              </span>
              <p className="mt-5 text-sm font-bold text-zinc-400">{moment.title}</p>
              <h3 className="mt-2 text-2xl font-black text-white">{moment.metric}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{moment.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
