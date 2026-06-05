import { ArrowLeft, Milestone } from "lucide-react";

const stages = [
  { label: "ליד חדש", count: "18", amount: "₪7,823", active: true },
  { label: "נוצר קשר", count: "17", amount: "₪7,120" },
  { label: "נקבעה פגישה", count: "3", amount: "₪2,340" },
  { label: "נשלחה הצעה", count: "3", amount: "₪1,950" },
  { label: "נסגר בהצלחה", count: "2", amount: "₪1,240" },
];

export function PipelineSection() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">
            <Milestone size={16} aria-hidden="true" />
            Sales Pipeline
          </span>
          <h2 className="section-title">לראות איפה כל כסף נמצא במסלול המכירה</h2>
          <p className="section-copy">
            GoldenFlow מציגה את שלבי המכירה בצורה ברורה, כדי לדעת מה חדש, איפה נוצר קשר,
            מה מחכה לפגישה ומה כבר התקדם להצעה.
          </p>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-5">
          {stages.map((stage, index) => (
            <article
              key={stage.label}
              className={`relative rounded-lg border p-5 ${
                stage.active
                  ? "border-gold-300/35 bg-gold-300/[0.1] shadow-gold"
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >
              {index < stages.length - 1 ? (
                <ArrowLeft
                  className="absolute -left-5 top-1/2 hidden -translate-y-1/2 text-gold-300/45 lg:block"
                  size={22}
                  aria-hidden="true"
                />
              ) : null}
              <p className="text-sm font-bold text-zinc-400">{stage.label}</p>
              <p className="mt-4 text-4xl font-black text-white">{stage.count}</p>
              <p className="mt-3 text-sm font-black text-gold-300">{stage.amount}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-gold-300/20 bg-ink-950/70 p-5">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="font-bold text-white">שווי מסלול פעיל</span>
            <span className="font-black text-gold-300">₪7,823</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[68%] rounded-full bg-gradient-to-l from-gold-300 to-gold-600 shadow-[0_0_22px_rgba(212,175,55,0.24)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
