import Image from "next/image";
import { LogIn, Menu } from "lucide-react";
import { APP_LOGIN_URL, navItems, primaryCta } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/78 backdrop-blur-2xl">
      <div className="container-shell flex min-h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" aria-label="GoldenFlow">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-300/30 bg-ink-950/70 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:h-11 sm:w-11">
            <Image
              src="/brand/goldenflow-icon-gold.png"
              alt="GoldenFlow"
              width={128}
              height={128}
              priority
              unoptimized
              className="h-full w-full max-w-full object-contain"
            />
          </span>
          <span className="text-lg font-black tracking-normal text-white sm:text-xl">GoldenFlow CRM</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="ניווט ראשי">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-gold-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href={APP_LOGIN_URL} className="gold-button hidden lg:inline-flex">
          <LogIn size={18} aria-hidden="true" />
          {primaryCta}
        </a>

        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-gold-300">
            <Menu size={22} aria-hidden="true" />
            <span className="sr-only">פתיחת תפריט</span>
          </summary>
          <div className="absolute left-0 top-14 w-[min(86vw,22rem)] rounded-lg border border-white/10 bg-ink-900 p-4 shadow-panel">
            <nav className="grid gap-1" aria-label="ניווט מובייל">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/[0.06] hover:text-gold-300"
                >
                  {item.label}
                </a>
              ))}
              <a href={APP_LOGIN_URL} className="gold-button mt-3 w-full">
                <LogIn size={18} aria-hidden="true" />
                {primaryCta}
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
