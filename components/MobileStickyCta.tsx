import { LogIn } from "lucide-react";
import { APP_LOGIN_URL } from "@/lib/constants";

export function MobileStickyCta() {
  return (
    <div className="pointer-events-none fixed inset-x-4 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-50 md:hidden">
      <a
        href={APP_LOGIN_URL}
        className="pointer-events-auto mx-auto flex min-h-12 max-w-md items-center justify-center gap-2 rounded-full border border-gold-300/35 bg-ink-950/92 px-5 py-3 text-sm font-black text-gold-300 shadow-gold backdrop-blur-xl transition active:scale-[0.98]"
      >
        <LogIn size={18} aria-hidden="true" />
        קבל פרטים על GoldenFlow
      </a>
    </div>
  );
}
