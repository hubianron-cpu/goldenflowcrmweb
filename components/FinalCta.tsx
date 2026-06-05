import { ArrowLeft, LogIn } from "lucide-react";
import { APP_LOGIN_URL, primaryCta } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id="contact" className="section-pad bg-gold-radial">
      <div className="container-shell">
        <div className="glass-panel rounded-lg p-6 text-center sm:p-10 lg:p-14">
          <span className="eyebrow">מתחילים מסודר</span>
          <h2 className="mx-auto max-w-4xl text-3xl font-black leading-tight text-white sm:text-5xl">
            רוצה לראות אם GoldenFlow מתאימה לתהליך המכירה שלך?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            אפשר לקבל פרטים, להבין איך המערכת עובדת ולבדוק אם היא מתאימה לניהול
            הלידים, המשימות והמעקבים בעסק שלך.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={APP_LOGIN_URL} className="gold-button">
              {primaryCta}
              <ArrowLeft size={18} aria-hidden="true" />
            </a>
            <a href={APP_LOGIN_URL} className="ghost-button">
              <LogIn size={18} aria-hidden="true" />
              כניסה למערכת
            </a>
          </div>
          <p className="microcopy mx-auto mt-5 max-w-2xl">
            בלי התחייבות - שיחה קצרה כדי להבין אם זה מתאים לעסק שלך.
          </p>
        </div>
      </div>
    </section>
  );
}
