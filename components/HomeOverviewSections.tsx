import {
  ArrowLeft,
  BarChart3,
  Check,
  CheckCircle2,
  LayoutDashboard,
  ListChecks,
  Route,
  Smartphone,
  Target,
} from "lucide-react";
import { APP_LOGIN_URL } from "@/lib/constants";
import { VideoFrame } from "@/components/VideoFrame";

const features = [
  { title: "ניהול לידים", icon: LayoutDashboard },
  { title: "משימות", icon: ListChecks },
  { title: "מסלול מכירה", icon: Route },
  { title: "מרכז ROI", icon: BarChart3 },
  { title: "סגירה יומית", icon: CheckCircle2 },
  { title: "מובייל", icon: Smartphone },
];

const pricingItems = [
  "ניהול לידים",
  "ניהול משימות",
  "מסלול מכירה",
  "מרכז ROI",
];

export function HomeProblemPreview() {
  return (
    <section className="border-b border-white/10 py-14 sm:py-20 lg:py-24">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">הבעיה</span>
          <h2 className="section-title">
            אם אין סדר במכירות - כסף נשאר על השולחן.
          </h2>
          <p className="section-copy">
            לידים, משימות ומעקבים שמתפזרים בין כלים שונים מקשים להבין למי
            לחזור היום ומה הפעולה הבאה שצריכה לקרות.
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-8">
          <div className="premium-card text-right">
            <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">
              הלידים לא נעלמים. הם פשוט מחכים לפולואפ.
            </h3>
            <p className="mt-4 text-base leading-8 text-zinc-300 sm:text-lg">
              GoldenFlowCRM עושה לך סדר ומראה בכל יום עם מי לדבר, מה הפעולה הבאה, ואיפה יש כסף שצריך לקדם.
            </p>
            <a href={APP_LOGIN_URL} className="gold-button mt-7 w-full sm:w-auto">
              לקבלת 14 יום ללא עלות
              <ArrowLeft size={18} aria-hidden="true" />
            </a>
          </div>
          <VideoFrame
            src="/videos/goldenflow-lead-followup-ad.mp4"
            title="GoldenFlowCRM lead follow-up video"
            placement="section"
            className="lg:mx-0 lg:justify-self-start"
          />
        </div>
      </div>
    </section>
  );
}

export function HomeSolutionPreview() {
  return (
    <section
      id="how-it-works"
      className="section-pad bg-ink-950 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.78), rgba(0,0,0,0.55)), url('/goldenflow-hero-bg.png')",
      }}
    >
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">הפתרון</span>
            <h2 className="section-title">
              GoldenFlow לא רק שומרת פרטים. היא עוזרת לך לפעול.
            </h2>
            <p className="section-copy">
              במקום עוד רשימה של לידים, מקבלים סדר יומי: מי דורש טיפול, מה
              התקדם, ומה עדיין מחכה למעקב.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["ליד", "פעולה הבאה", "מעקב"].map((item) => (
              <div key={item} className="premium-card">
                <Target className="text-gold-300" size={24} aria-hidden="true" />
                <p className="mt-5 text-lg font-black text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeFeaturesPreview() {
  return (
    <section id="features" className="section-pad border-y border-white/10 bg-ink-950/60">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">פיצ׳רים מרכזיים</span>
          <h2 className="section-title">הכלים שמחזיקים את תהליך המכירה במקום אחד.</h2>
          <p className="section-copy">
            עמוד הבית מציג את היכולות המרכזיות. הפירוט המלא נמצא בעמוד הפיצ׳רים.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="premium-card">
                <Icon className="text-gold-300" size={24} aria-hidden="true" />
                <h3 className="mt-5 text-lg font-black text-white">{feature.title}</h3>
              </div>
            );
          })}
        </div>

        <div className="mt-9 flex justify-center">
          <a href="/features" className="ghost-button">
            לכל הפיצ׳רים
            <ArrowLeft size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function HomeRoiPreview() {
  return (
    <section id="roi" className="section-pad bg-gold-radial">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">מרכז ROI</span>
            <h2 className="section-title">לדעת מה באמת מחזיר לך כסף.</h2>
            <p className="section-copy">
              GoldenFlow מציגה תמונת החלטה קצרה: כמה הושקע, כמה נכנס, מה הרווח
              הנקי, ומה כדאי להמשיך לבדוק.
            </p>
            <a href="/roi" className="ghost-button mt-8">
              למרכז ROI
              <ArrowLeft size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="glass-panel rounded-lg p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["השקעה חודשית", "₪2,500"],
                ["הכנסה מהלידים", "₪18,400"],
                ["רווח נקי", "₪15,900"],
                ["ROI כללי", "x7.3"],
              ].map(([label, value]) => (
                <div key={label} className="metric-card">
                  <p className="text-sm text-zinc-400">{label}</p>
                  <p className="mt-2 text-3xl font-black text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePricingPreview() {
  return (
    <section id="pricing" className="section-pad">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">מחיר השקה</span>
          <h2 className="section-title">תמחור פשוט להתחלה מסודרת.</h2>
          <p className="section-copy">
            כרטיס מחיר קצר בעמוד הבית, עם פירוט נוסף בעמוד המחיר.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-lg border border-gold-300/25 bg-gradient-to-b from-white/[0.06] via-white/[0.035] to-white/[0.02] shadow-panel">
          <div className="border-b border-gold-300/15 bg-gold-300/[0.06] px-6 py-4 text-center text-sm font-black text-gold-300">
            מחיר השקה
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex items-end justify-center gap-2 sm:justify-start">
              <span className="text-5xl font-black text-white sm:text-6xl">₪97</span>
              <span className="pb-3 text-lg font-bold text-zinc-300">לחודש</span>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {pricingItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                  <Check className="shrink-0 text-gold-300" size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={APP_LOGIN_URL} className="gold-button">
                כניסה למערכת GoldenFlow
              </a>
              <a href="/pricing" className="ghost-button">
                לפרטי המחיר
                <ArrowLeft size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
