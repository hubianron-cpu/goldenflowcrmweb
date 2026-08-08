const audiences = [
  "מאמנים אישיים",
  "יועצי תזונה",
  "יועצים עסקיים",
  "מטפלים",
  "נותני שירות",
  "בעלי עסקים קטנים",
  "עסקים שמקבלים לידים מפרסום ממומן",
  "עסקים שעושים שיחות מכירה",
  "מי שמנהל לקוחות דרך וואטסאפ, אקסל ופתקים",
];

export function AudienceSection() {
  return (
    <section id="audience" className="section-pad">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">למי זה מתאים</span>
          <h2 className="section-title">למי GoldenFlow מתאימה?</h2>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div key={audience} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 text-lg font-bold text-white">
              {audience}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-zinc-300">
          אם יש לך לידים, שיחות ומעקב - GoldenFlow יכולה לעשות לך סדר.
        </p>
      </div>
    </section>
  );
}
