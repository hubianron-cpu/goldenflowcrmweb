import { Clock3, ListChecks, Target } from "lucide-react";
import { PageCta, PageHero, PageShell } from "@/components/SimplePage";

const values = [
  {
    title: "סדר",
    text: "כל ליד, משימה ומעקב נמצאים במקום ברור, כדי שהיום לא יתחיל מחיפוש מידע.",
    icon: ListChecks,
  },
  {
    title: "שליטה",
    text: "מבט אחד על מצב הלידים, העסקאות והפעולות החשובות נותן תמונה נקייה יותר.",
    icon: Target,
  },
  {
    title: "פעולה בזמן",
    text: "GoldenFlow עוזרת לזהות מה דורש טיפול עכשיו, כדי שהמעקב לא יישאר פתוח מדי.",
    icon: Clock3,
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="אודות"
        title="על GoldenFlow CRM"
        description="GoldenFlow נבנתה כדי לעזור לבעלי עסקים לנהל לידים, משימות ותהליך מכירה בצורה פשוטה וברורה."
      />

      <section className="mx-auto mt-12 max-w-4xl">
        <div className="premium-surface p-6 sm:p-8">
          <span className="status-pill">החזון</span>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white">
            להפוך מעקב יומי לפעולה ברורה
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">
            במקום לעבוד עם מידע מפוזר, GoldenFlow שמה דגש על סדר, שליטה ומעקב
            בזמן. המטרה היא לעזור לעסק להבין מה קורה בכל יום, מה פתוח, ומה
            הפעולה הבאה שכדאי לבצע.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <div key={value.title} className="premium-card">
              <Icon className="text-gold-300" size={24} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-black text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{value.text}</p>
            </div>
          );
        })}
      </section>

      <div className="mx-auto mt-9 max-w-4xl">
        <PageCta />
      </div>
    </PageShell>
  );
}
