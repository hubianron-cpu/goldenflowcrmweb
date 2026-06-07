import {
  BarChart3,
  Bell,
  Bolt,
  CheckCircle2,
  Flag,
  LineChart,
  ListTodo,
  MessageSquareText,
  Milestone,
  MousePointerClick,
  Smartphone,
  Target,
} from "lucide-react";

const features = [
  ["ניהול לידים", MessageSquareText],
  ["ניהול משימות", ListTodo],
  ["מסלול מכירה", Milestone],
  ["סגירה יומית", CheckCircle2],
  ["תזכורות מעקב", Bell],
  ["סטטוסים חכמים", Flag],
  ["מרכז ROI", BarChart3],
  ["תובנות עסקיות", LineChart],
  ["התאמה למובייל", Smartphone],
  ["כפתורי פעולה מהירים", MousePointerClick],
  ["סדר לפי עדיפות", Target],
  ["תהליך מכירה במקום אחד", Bolt],
] as const;

export function FeaturesSection() {
  return (
    <section id="features" className="section-pad">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">פיצ׳רים</span>
          <h2 className="section-title">מה יש בתוך GoldenFlow?</h2>
          <p className="section-copy">
            כלים פשוטים שמתחברים לדרך העבודה היומית שלך: פחות חיפוש, יותר פעולה,
            ויותר בהירות לגבי מה מקדם מכירה.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([feature, Icon]) => (
            <div
              key={feature}
              className="mx-auto flex min-h-24 w-full max-w-sm flex-col items-center justify-center gap-3 rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.025] p-4 text-center transition hover:border-gold-300/30 hover:bg-white/[0.055] sm:max-w-none sm:flex-row sm:justify-start sm:text-right"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold-300/20 bg-gold-300/10">
                <Icon className="text-gold-300" size={20} aria-hidden="true" />
              </span>
              <span className="text-sm font-bold leading-6 text-zinc-100">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
