import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";

const before = [
  "הכל מפוזר",
  "אין מעקב מסודר",
  "קשה לדעת מה לעשות היום",
  "לידים נשכחים",
  "החלטות מתקבלות לפי תחושה",
];

const after = [
  "הכל במקום אחד",
  "כל ליד עם פעולה הבאה",
  "סדר יומי ברור",
  "שליטה טובה יותר במכירות",
  "החלטות לפי נתונים",
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="section-pad border-y border-white/10 bg-white/[0.025]">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">יתרונות</span>
          <h2 className="section-title">לפני GoldenFlow הכול מפוזר. אחרי GoldenFlow יש פעולה ברורה.</h2>
          <p className="section-copy">
            המעבר המרכזי הוא לא רק מכלי אחד לכלי אחר, אלא מעבודה תגובתית לעבודה
            עם סדר, עדיפות ופעולה ברורה.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <Comparison title="לפני GoldenFlow" items={before} icon="before" />
          <div className="hidden items-center justify-center px-3 lg:flex">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-300/30 bg-gold-300/10 text-gold-300">
              <ArrowLeft size={24} aria-hidden="true" />
            </span>
          </div>
          <Comparison title="אחרי GoldenFlow" items={after} icon="after" />
        </div>
      </div>
    </section>
  );
}

function Comparison({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: "before" | "after";
}) {
  const Icon = icon === "before" ? XCircle : CheckCircle2;
  const color = icon === "before" ? "text-zinc-500" : "text-gold-300";
  const panelClass =
    icon === "before"
      ? "rounded-lg border border-white/10 bg-[#111111]/80 p-6 opacity-90"
      : "dashboard-panel p-6";

  return (
    <article className={panelClass}>
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <ul className="mt-6 grid gap-3">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 rounded-lg border px-3 py-3 text-zinc-300 ${
              icon === "before"
                ? "border-white/10 bg-white/[0.025]"
                : "border-gold-300/20 bg-gold-300/[0.07]"
            }`}
          >
            <Icon className={`mt-1 shrink-0 ${color}`} size={20} aria-hidden="true" />
            <span className="leading-7">{item}</span>
          </li>
        ))}
      </ul>
      {icon === "after" ? (
        <div className="mt-6 rounded-lg border border-gold-300/20 bg-ink-950/70 p-4">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-bold text-white">מעקב יומי מסודר</span>
            <span className="text-gold-300">68%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill w-[68%]" />
          </div>
        </div>
      ) : null}
    </article>
  );
}
