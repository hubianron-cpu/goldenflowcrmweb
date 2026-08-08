import { PageCta, PageHero, PageShell } from "@/components/SimplePage";

const terms = [
  {
    title: "שימוש במערכת",
    text: "השימוש ב-GoldenFlow מיועד לניהול תהליכי עבודה עסקיים בצורה תקינה ובהתאם להוראות השירות.",
  },
  {
    title: "הגבלת אחריות",
    text: "המערכת מספקת כלי ניהול ותובנות, אך אינה מבטיחה תוצאות עסקיות או מכירות בפועל.",
  },
  {
    title: "תשלומים",
    text: "תנאי התשלום, תקופת החיוב והמחיר הסופי צריכים להיות מוצגים למשתמש לפני תחילת שימוש בתשלום.",
  },
  {
    title: "ביטול",
    text: "תנאי ביטול השירות צריכים להיקבע ולהופיע בנוסח המשפטי המלא של תנאי השימוש.",
  },
  {
    title: "קניין רוחני",
    text: "המותג, העיצוב, הטקסטים והמערכת שייכים לבעלי GoldenFlow, אלא אם צוין אחרת במפורש.",
  },
  {
    title: "יצירת קשר",
    text: "לשאלות בנוגע לתנאי השימוש יש לפנות דרך ערוצי הקשר הרשמיים של GoldenFlow.",
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="תנאי שימוש"
        title="תנאי השימוש של GoldenFlow"
        description="העמוד כולל נוסח בסיסי לתנאי שימוש. יש לעדכן אותו עם ייעוץ משפטי לפני שימוש רשמי ומחייב."
      />

      <section className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
        {terms.map((term) => (
          <article key={term.title} className="premium-card">
            <h2 className="text-lg font-black text-white">{term.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{term.text}</p>
          </article>
        ))}
      </section>

      <div className="mx-auto mt-9 max-w-4xl">
        <PageCta />
      </div>
    </PageShell>
  );
}
