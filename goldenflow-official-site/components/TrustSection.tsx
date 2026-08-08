import { Clock3, MessagesSquare, PhoneCall } from "lucide-react";

const trustItems = [
  {
    icon: PhoneCall,
    title: "בנוי לעסקים שמוכרים דרך שיחות",
    text: "מתאים לעסקים שבהם כל ליד צריך יחס, מעקב והחלטה מתי נכון לחזור אליו.",
  },
  {
    icon: MessagesSquare,
    title: "מתאים ללידים מפרסום, וואטסאפ ואורגני",
    text: "כל מקור מקבל מקום מסודר, כדי להבין מאיפה מגיעים הלידים ואיך מטפלים בהם.",
  },
  {
    icon: Clock3,
    title: "עוזר לפעול בזמן ולא לשכוח מעקבים",
    text: "המערכת מציפה את הפעולה הבאה כדי שהמעקב לא יישאר בזיכרון או בפתק.",
  },
];

export function TrustSection() {
  return (
    <section className="section-pad border-y border-white/10 bg-white/[0.025]">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">אמון ושימוש יומי</span>
          <h2 className="section-title">נבנה לעסקים שמוכרים דרך שיחות ומעקב</h2>
          <p className="section-copy">
            GoldenFlow CRM מיועדת לבעלי עסקים שמוכרים דרך קשר אישי, שיחות ומעקב.
            היא לא מבטיחה מכירות - היא נותנת סדר, תיעוד ובהירות לפעולה הבאה.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {trustItems.map((item) => (
            <article key={item.title} className="premium-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold-300/20 bg-gold-300/10">
                <item.icon className="text-gold-300" size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-black leading-7 text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
