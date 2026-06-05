import { ClipboardCheck, LayoutDashboard, ListChecks, Route } from "lucide-react";

const solutions = [
  {
    icon: ClipboardCheck,
    title: "ניהול לידים חכם",
    text: "כל ליד במקום אחד: סטטוס, מקור, הערות, עדיפות והפעולה הבאה.",
  },
  {
    icon: ListChecks,
    title: "סדר יומי ברור",
    text: "לדעת בכל יום למי לחזור, מה לבדוק ומה לקדם.",
  },
  {
    icon: Route,
    title: "מסלול מכירה מסודר",
    text: "לראות מה חדש, מה בשיחה, איפה נשלחה הצעה ומה תקוע במעקב.",
  },
  {
    icon: LayoutDashboard,
    title: "מרכז שליטה עסקי",
    text: "להבין מה מתקדם, מה תקוע ואיפה יש כסף שמחכה לטיפול.",
  },
];

export function SolutionSection() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">הפתרון</span>
          <h2 className="section-title">
            GoldenFlow CRM לא רק שומרת פרטים. היא עוזרת לך לפעול.
          </h2>
          <p className="section-copy">
            במקום לרדוף אחרי מידע מפוזר, מקבלים תמונה אחת של הלידים, המשימות
            וההתקדמות העסקית - עם פעולה הבאה ברורה לכל ליד.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {solutions.map((solution) => (
            <article key={solution.title} className="premium-card">
              <solution.icon className="text-gold-300" size={28} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-white">{solution.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{solution.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
