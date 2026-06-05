import { AlertTriangle, CalendarX, MessagesSquare } from "lucide-react";

const problems = [
  {
    icon: MessagesSquare,
    title: "לידים נשכחים בין כלים",
    text: "שיחות מתפזרות בין וואטסאפ, אקסל ופתקים במקום להיות בתהליך אחד.",
  },
  {
    icon: CalendarX,
    title: "לא ברור למי לחזור היום",
    text: "כשאין סדר עדיפויות יומי, לידים חמים מתקררים בלי פעולה בזמן.",
  },
  {
    icon: AlertTriangle,
    title: "שיחות מכירה נתקעות",
    text: "הצעות, מעקבים ושיחות המשך נשארים בראש במקום להפוך לתהליך ברור.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-pad border-b border-white/10">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">הבעיה</span>
          <h2 className="section-title">
            אם אין לך סדר במכירות - כסף נשאר על השולחן.
          </h2>
          <p className="section-copy">
            רוב בעלי העסקים לא מאבדים לידים בגלל מוצר לא טוב. הם מאבדים אותם
            כי אין מעקב ברור, אין פעולה הבאה, ואין מקום אחד שמראה מה דורש טיפול.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {problems.map((problem) => (
            <article key={problem.title} className="premium-card">
              <problem.icon className="text-gold-300" size={26} aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold text-white">{problem.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{problem.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
          GoldenFlow CRM נבנתה כדי להפוך את הבלגן הזה לשגרת עבודה ברורה:
          ליד, סטטוס, פעולה הבאה ומעקב יומי.
        </p>
      </div>
    </section>
  );
}
