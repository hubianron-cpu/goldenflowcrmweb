const steps = [
  {
    title: "שלב 1 - מכניסים את הלידים",
    text: "מוסיפים לידים חדשים עם מקור, סטטוס ופרטים חשובים.",
  },
  {
    title: "שלב 2 - GoldenFlow עושה סדר",
    text: "המערכת מרכזת את המידע ומציגה לך את המשימות והלידים החשובים.",
  },
  {
    title: "שלב 3 - פועלים וסוגרים יותר",
    text: "בכל יום ברור לך מה הפעולה הבאה שמקדמת מכירה.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad border-y border-white/10 bg-white/[0.025]">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">איך זה עובד</span>
          <h2 className="section-title">איך זה עובד בפועל?</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="premium-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-300 text-lg font-black text-ink-950">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
