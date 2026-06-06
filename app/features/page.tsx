import {
  BarChart3,
  Bell,
  CheckCircle2,
  LayoutDashboard,
  ListChecks,
  Route,
  Smartphone,
  Users,
} from "lucide-react";
import { PageCta, PageHero, PageShell } from "@/components/SimplePage";

const features = [
  {
    title: "ניהול לידים",
    text: "ריכוז לידים לפי סטטוס, מקור ופעולה הבאה.",
    icon: Users,
  },
  {
    title: "ניהול משימות",
    text: "רשימת פעולות יומית שמחזירה אותך למה שחשוב.",
    icon: ListChecks,
  },
  {
    title: "מסלול מכירה",
    text: "מבט ברור על שלבי התהליך והתקדמות העסקאות.",
    icon: Route,
  },
  {
    title: "סגירה יומית",
    text: "סיכום קצר של מה פתוח ומה כדאי לסגור היום.",
    icon: CheckCircle2,
  },
  {
    title: "מרכז ROI",
    text: "הבנה של השקעה, הכנסה ורווח נקי לפי מקור.",
    icon: BarChart3,
  },
  {
    title: "תזכורות מעקב",
    text: "מעקב אחרי לידים שלא קיבלו טיפול בזמן.",
    icon: Bell,
  },
  {
    title: "התאמה למובייל",
    text: "עבודה נוחה גם כשלא נמצאים מול מחשב.",
    icon: Smartphone,
  },
  {
    title: "תובנות עסקיות",
    text: "תמונה מסודרת שמסייעת לקבל החלטות יומיומיות.",
    icon: LayoutDashboard,
  },
];

export default function FeaturesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="פיצ׳רים"
        title="כלים שמחזירים אותך לפעולה"
        description="GoldenFlow מרכזת את הכלים המרכזיים לניהול לידים, משימות ותהליך מכירה כדי שהפעולה הבאה תהיה ברורה יותר."
      />

      <section className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div key={feature.title} className="premium-card">
              <Icon className="text-gold-300" size={24} aria-hidden="true" />
              <h2 className="mt-5 text-lg font-black text-white">{feature.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{feature.text}</p>
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
