import { PageCta, PageHero, PageShell } from "@/components/SimplePage";

const sections = [
  {
    title: "אילו נתונים נאספים",
    text: "ייתכן שייאספו פרטים שמוזנים במערכת, פרטי משתמש בסיסיים, פרטי שימוש טכניים ונתונים הנדרשים להפעלת השירות.",
  },
  {
    title: "למה הנתונים משמשים",
    text: "הנתונים נועדו לאפשר שימוש במערכת, לשפר את חוויית המשתמש, לספק תמיכה ולנהל את השירות בצורה תקינה.",
  },
  {
    title: "איך הנתונים נשמרים",
    text: "המידע אמור להישמר באמצעים סבירים ובהתאם למבנה השירות. יש לעדכן את הנוסח הסופי לפי אופן האחסון בפועל.",
  },
  {
    title: "מימוש זכויות ויצירת קשר",
    text: "משתמשים יכולים לפנות לצורך בירור, תיקון או בקשה הנוגעת למידע שלהם. פרטי קשר רשמיים צריכים להתווסף לנוסח הסופי.",
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="מדיניות פרטיות"
        title="מדיניות פרטיות GoldenFlow"
        description="העמוד כולל נוסח בסיסי וברור לגבי פרטיות ושימוש במידע. הנוסח אינו מהווה ייעוץ משפטי ויש לעדכן אותו לפי ייעוץ מקצועי."
      />

      <section className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="premium-card">
            <h2 className="text-lg font-black text-white">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{section.text}</p>
          </article>
        ))}
      </section>

      <div className="mx-auto mt-9 max-w-4xl">
        <PageCta />
      </div>
    </PageShell>
  );
}
