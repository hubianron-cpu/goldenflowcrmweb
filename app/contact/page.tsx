import { Instagram, LogIn, MessageCircle } from "lucide-react";
import { PageHero, PageShell } from "@/components/SimplePage";
import { APP_LOGIN_URL } from "@/lib/constants";

const instagramUrl = "https://www.instagram.com/goldenflowcrm/";
const whatsappUrl =
  "https://wa.me/972524780853?text=%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%AA%D7%99%D7%99%D7%A2%D7%A5%20%D7%90%D7%99%D7%AA%D7%9A%20%D7%91%D7%A0%D7%95%D7%92%D7%A2%20%D7%9C%D7%9E%D7%A2%D7%A8%D7%9B%D7%AA%20goldenflow";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="צור קשר"
        title="רוצה לבדוק אם GoldenFlow מתאימה לעסק שלך?"
        description="אפשר להתחיל מכניסה למערכת, או לפנות דרך הערוצים הרשמיים כדי להבין איך GoldenFlow יכולה להשתלב בתהליך המכירה שלך."
      />

      <section className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
        <a href={APP_LOGIN_URL} className="gold-button">
          <LogIn size={18} aria-hidden="true" />
          כניסה למערכת
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ghost-button"
        >
          <Instagram size={18} aria-hidden="true" />
          אינסטגרם
        </a>
        <a href={whatsappUrl} className="ghost-button">
          <MessageCircle size={18} aria-hidden="true" />
          וואטסאפ
        </a>
      </section>

      <section className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
        {["בדיקת התאמה ראשונית לעסק", "הבנת תהליך העבודה במערכת", "מיקוד בלידים ובמעקבים", "התחלה מסודרת בלי עומס מיותר"].map((item) => (
          <div key={item} className="premium-surface p-4 text-sm font-bold leading-7 text-zinc-200">
            {item}
          </div>
        ))}
      </section>
    </PageShell>
  );
}
