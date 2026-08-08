import { MessageCircle, Phone, Smartphone } from "lucide-react";

export function MobilePreviewSection() {
  return (
    <section className="section-pad border-y border-white/10 bg-white/[0.025]">
      <div className="container-shell">
        <div className="section-heading">
          <span className="eyebrow">
            <Smartphone size={16} aria-hidden="true" />
            Mobile CRM
          </span>
          <h2 className="section-title">גם מהטלפון - לדעת מה הפעולה הבאה</h2>
          <p className="section-copy">
            GoldenFlow מיועדת גם לרגעים שבין שיחות ופגישות: לראות ליד חם, לבדוק
            שווי, ולפעול דרך וואטסאפ או שיחה בלי לחפש את המידע מחדש.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-sm">
          <div className="rounded-[2rem] border border-gold-300/25 bg-ink-950 p-3 shadow-gold">
            <div className="rounded-[1.45rem] border border-white/10 bg-[#080808] p-4">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-zinc-500">GoldenFlow CRM</p>
                  <h3 className="mt-1 text-lg font-black text-white">הפעולה הבאה</h3>
                </div>
                <span className="rounded-full border border-gold-300/25 bg-gold-300/10 px-3 py-1 text-xs font-black text-gold-300">
                  מובייל
                </span>
              </div>

              <div className="grid gap-3">
                <div className="rounded-lg border border-gold-300/25 bg-gold-300/[0.08] p-4">
                  <p className="text-sm font-bold text-gold-300">לידים לטיפול היום</p>
                  <p className="mt-2 text-4xl font-black text-white">6</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-black text-white">ליד חם #01</p>
                      <p className="mt-1 text-xs text-zinc-500">מקור: וואטסאפ</p>
                    </div>
                    <span className="rounded-full border border-gold-300/25 px-3 py-1 text-xs font-black text-gold-300">
                      ₪300
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-zinc-300">
                    לא קיבל מענה 3 ימים - מומלץ לחזור היום.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <span className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 px-3 py-2 text-xs font-black text-ink-950">
                      <Phone size={14} aria-hidden="true" />
                      התקשר
                    </span>
                    <span className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-300/25 px-3 py-2 text-xs font-black text-gold-300">
                      <MessageCircle size={14} aria-hidden="true" />
                      וואטסאפ
                    </span>
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-bold text-white">התקדמות ליעד</span>
                    <span className="text-gold-300">68%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[68%] rounded-full bg-gradient-to-l from-gold-300 to-gold-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
