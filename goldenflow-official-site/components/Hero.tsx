import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  LogIn,
  TrendingUp,
} from "lucide-react";
import { APP_LOGIN_URL, primaryCta } from "@/lib/constants";
import { VideoFrame } from "@/components/VideoFrame";

const metrics = [
  { label: "לידים לטיפול היום", value: "6", tone: "text-gold-300" },
  { label: "שווי עסקאות פתוחות", value: "₪7,823", tone: "text-gold-200" },
  { label: "כסף בסיכון", value: "₪1,347", tone: "text-gold-200" },
  { label: "התקדמות ליעד", value: "68%", tone: "text-white" },
];

const pipeline = ["ליד חדש", "נוצר קשר", "נקבעה פגישה", "נשלחה הצעה", "נסגר"];

const leadRows = [
  { name: "ליד חם #01", status: "מקור: וואטסאפ - פעולה להיום", value: "חם", tone: "border-gold-300/30 text-gold-300" },
  { name: "ליד חם #02", status: "מקור: קמפיין - ממתין לתגובה", value: "ממתין", tone: "border-gold-300/20 text-gold-200" },
  { name: "מתעניין חדש", status: "מקור: אורגני - לקבוע שיחה", value: "חדש", tone: "border-white/15 text-zinc-300" },
];

const contactSteps = [
  "נבין איך לעבוד עם GoldenFlow בעסק שלך",
  "נראה לך שלב אחרי שלב איך המערכת עובדת בשבילך",
  "תראה איך עבודה מסודרת יכולה לקדם יותר סגירות",
  "איך לנהל בתוך המערכת מרכז ROI יעיל",
  "לנהל תהליכי מכירה בקלות וביעילות",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-950 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.82), rgba(0,0,0,0.45), rgba(0,0,0,0.2)), url('/goldenflow-hero-main-bg.png')",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 68% 42%, rgba(0,0,0,0.74), rgba(0,0,0,0.5) 34%, rgba(0,0,0,0.2) 64%, transparent 100%), linear-gradient(90deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.36) 48%, rgba(0,0,0,0.66) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-l from-transparent via-gold-300/30 to-transparent" />
      <div className="container-shell relative z-10 grid min-h-[calc(100vh-8rem)] items-start gap-10 pb-28 pt-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-12 lg:pb-12 lg:pt-14">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:pt-2 lg:text-right">
          <div className="eyebrow mx-auto justify-center text-center lg:mx-0">
            <Image
              src="/brand/goldenflow-icon-gold.png"
              alt="GoldenFlow"
              width={128}
              height={128}
              loading="eager"
              unoptimized
              className="h-8 w-8 max-w-full object-contain sm:h-9 sm:w-9"
            />
            CRM חכם למאמנים, יועצים ונותני שירות
          </div>
          <h1
            className="text-3xl font-black leading-[1.12] text-white sm:text-5xl lg:max-w-[42rem] lg:text-6xl lg:leading-[1.08] xl:max-w-3xl 2xl:text-7xl"
            style={{ textShadow: "0 8px 40px rgba(0,0,0,0.58)" }}
          >
            הלידים שלך לא נעלמים. הם פשוט צריכים ניהול נכון.
          </h1>
          <p className="mx-auto mt-6 text-base leading-8 text-zinc-300 sm:text-xl lg:mx-0">
            GoldenFlow CRM מרכזת את הלידים, המשימות ותהליך המכירה שלך במקום אחד -
            ומראה לך בכל יום למי כדאי לפנות, מה הפעולה הבאה ואיפה הכסף מחכה לטיפול.
          </p>
          <div className="mx-auto mt-6 grid max-w-md gap-3 sm:max-w-2xl sm:grid-cols-3 lg:mx-0">
            {["סדר יומי ברור", "מעקב אחרי כל ליד", "החלטות לפי נתונים"].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-center text-sm font-semibold text-zinc-200">
                <CheckCircle2 className="shrink-0 text-gold-300" size={16} aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 grid max-w-md gap-4 sm:flex sm:max-w-none sm:flex-row sm:gap-3 lg:mx-0">
            <a href={APP_LOGIN_URL} className="gold-button w-full sm:w-auto">
              {primaryCta}
              <ArrowLeft size={18} aria-hidden="true" />
            </a>
            <a href={APP_LOGIN_URL} className="ghost-button w-full sm:w-auto">
              <LogIn size={18} aria-hidden="true" />
              התחברות למערכת
            </a>
          </div>
          <p className="microcopy mx-auto mt-6 max-w-md text-center lg:mx-0 lg:text-right">
            בלי התחייבות - רק להבין אם זה מתאים לעסק שלך.
          </p>
          <VideoFrame
            src="/videos/goldenflow-daily-closing.mp4"
            title="GoldenFlowCRM daily closing video"
            placement="hero"
            className="mt-7 lg:mx-auto"
          />
          <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-gold-300/20 bg-[#111111]/78 p-5 text-right shadow-[0_22px_70px_rgba(0,0,0,0.34),0_0_34px_rgba(212,175,55,0.08)] backdrop-blur sm:p-6 lg:mx-auto">
            <h2 className="text-base font-black text-white sm:text-lg">
              מה קורה אחרי שתשלח הודעה?
            </h2>
            <div className="mt-4 grid gap-3">
              {contactSteps.map((step) => (
                <div key={step} className="flex items-start gap-3 text-sm leading-6 text-zinc-300 sm:text-[15px]">
                  <CheckCircle2 className="mt-1 shrink-0 text-gold-300" size={16} aria-hidden="true" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative lg:pt-16 xl:pt-20">
          <div className="absolute -inset-6 rounded-[2rem] bg-gold-300/12 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-lg p-3 sm:p-5">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-gold-300/10 to-transparent" />
            <div className="relative mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold-300/20 bg-gold-300/10 p-1.5">
                  <Image
                    src="/brand/goldenflow-icon-gold.png"
                    alt="GoldenFlow"
                    width={128}
                    height={128}
                    loading="eager"
                    unoptimized
                    className="h-full w-full max-w-full object-contain"
                  />
                </span>
                <div>
                  <p className="text-sm text-zinc-400">מרכז השליטה היומי</p>
                  <h2 className="text-xl font-black text-white">GoldenFlow CRM</h2>
                </div>
              </div>
              <span className="rounded-full border border-gold-300/25 bg-gold-300/10 px-3 py-1 text-xs font-bold text-gold-300 shadow-[0_0_28px_rgba(212,175,55,0.14)]">
                Demo View
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <p className={`text-3xl font-black ${metric.tone}`}>{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_.72fr]">
              <div className="premium-surface p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold text-white">מסלול מכירה</h3>
                  <TrendingUp className="text-gold-300" size={18} aria-hidden="true" />
                </div>
                <div className="grid gap-2">
                  {pipeline.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="w-16 shrink-0 text-xs font-semibold text-zinc-400">{step}</span>
                      <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                        <span
                          className="block h-full rounded-full bg-gradient-to-l from-gold-300 to-gold-600 shadow-[0_0_18px_rgba(212,175,55,0.18)]"
                          style={{ width: `${92 - index * 14}%` }}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-gold-300/25 bg-gold-300/[0.09] p-4">
                <p className="flex items-center gap-2 text-sm font-bold text-gold-300">
                  <Clock size={16} aria-hidden="true" />
                  פעולה מומלצת להיום
                </p>
                <h3 className="mt-3 text-lg font-black leading-7 text-white">
                  לחזור ל-3 לידים חמים שלא קיבלו מענה ב-48 שעות האחרונות.
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  GoldenFlow מסדרת את סדר העדיפויות כדי שהפעולה הבאה תהיה ברורה.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["התקשר", "שלח הודעה", "סמן כטופל"].map((action) => (
                    <span key={action} className="inline-flex rounded-full border border-gold-300/25 bg-ink-950/70 px-3 py-2 text-xs font-black text-gold-300">
                      {action}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 premium-surface p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-bold text-white">לידים בעדיפות גבוהה</h3>
                <span className="text-xs font-bold text-zinc-500">דמו שיווקי</span>
              </div>
              <div className="grid gap-2">
                {leadRows.map((lead) => (
                  <div key={lead.name} className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.035] px-3 py-2">
                    <div>
                      <p className="text-sm font-bold text-white">{lead.name}</p>
                      <p className="mt-1 text-xs text-zinc-500">{lead.status}</p>
                    </div>
                    <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-black ${lead.tone}`}>
                      {lead.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[.72fr_1fr]">
              <div className="premium-surface p-4">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-bold text-white">התקדמות לסגירה</span>
                  <span className="text-gold-300">68%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill w-[68%]" />
                </div>
              </div>

              <div className="grid gap-2 premium-surface p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">משימות להיום</span>
                  <span className="text-xs font-bold text-gold-300">8 פתוחות</span>
                </div>
                {["לחזור לליד חם #01", "לשלוח הודעה למתעניין מקמפיין", "לקבוע שיחה עם מתעניין חדש"].map((task) => (
                  <div key={task} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="h-2 w-2 rounded-full bg-gold-300" />
                    {task}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
