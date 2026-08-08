import { PageCta, PageHero, PageShell } from "@/components/SimplePage";

const faqs = [
  {
    question: "למי GoldenFlow מתאימה?",
    answer: "לעסקים שמנהלים לידים, שיחות ומעקבים ורוצים לעבוד בצורה מסודרת יותר.",
  },
  {
    question: "האם צריך ידע טכני?",
    answer: "לא. המטרה היא לשמור על תהליך ברור ופשוט, בלי להעמיס על העבודה היומית.",
  },
  {
    question: "מה קורה אחרי שנכנסים למערכת?",
    answer: "אפשר להתחיל לבחון את ניהול הלידים, המשימות והפעולות המרכזיות במקום אחד.",
  },
  {
    question: "האם אפשר להשתמש מהטלפון?",
    answer: "כן. האתר והחוויה בנויים כך שיתאימו גם לעבודה ממובייל.",
  },
  {
    question: "האם המערכת מחליפה CRM רגיל?",
    answer: "GoldenFlow מתמקדת בעבודה יומית עם לידים, מעקבים ו-ROI. התאמה מלאה תלויה בצרכים של העסק.",
  },
  {
    question: "האם יש תמיכה?",
    answer: "בשלב זה המערכת מיועדת להתחלה מסודרת עם תמיכה בסיסית למשתמשים הראשונים.",
  },
  {
    question: "האם המחיר קבוע?",
    answer: "המחיר הנוכחי הוא מחיר השקה ועשוי להתעדכן בהמשך.",
  },
  {
    question: "האם אפשר לבטל?",
    answer: "פרטי ביטול ותנאי שימוש מלאים צריכים להיות מוצגים בנוסח המשפטי המעודכן של השירות.",
  },
];

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="שאלות נפוצות"
        title="תשובות קצרות לפני שמתחילים"
        description="ריכזנו תשובות בסיסיות שיעזרו להבין למי GoldenFlow מתאימה ואיך נכון להתחיל לבדוק את המערכת."
      />

      <section className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <article key={faq.question} className="premium-card">
            <h2 className="text-lg font-black text-white">{faq.question}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{faq.answer}</p>
          </article>
        ))}
      </section>

      <div className="mx-auto mt-9 max-w-4xl">
        <PageCta />
      </div>
    </PageShell>
  );
}
