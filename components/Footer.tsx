import Image from "next/image";
import { ArrowLeft, LogIn } from "lucide-react";
import { APP_LOGIN_URL } from "@/lib/constants";

const footerLinks = [
  { label: "איך זה עובד", href: "#how-it-works" },
  { label: "פיצ׳רים", href: "#features" },
  { label: "מרכז ROI", href: "#roi" },
  { label: "מחיר", href: "#pricing" },
  { label: "תנאי שימוש", href: "#" },
  { label: "מדיניות פרטיות", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-10">
      <div className="container-shell grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div>
          <div className="inline-flex rounded-lg border border-gold-300/20 bg-black/35 px-4 py-3">
            <Image
              src="/brand/goldenflow-logo-full.png"
              alt="GoldenFlow CRM"
              width={220}
              height={220}
              loading="eager"
              unoptimized
              className="h-16 w-auto max-w-full object-contain sm:h-20"
            />
          </div>
          <p className="mt-4 max-w-xl leading-7 text-zinc-400">
            מערכת חכמה לניהול לידים, משימות ומכירות.
          </p>
          <p className="mt-6 text-sm text-zinc-500">© GoldenFlow. All rights reserved.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:justify-center">
          <a href={APP_LOGIN_URL} className="ghost-button min-w-44 px-5">
            <LogIn size={18} aria-hidden="true" />
            התחברות למערכת
          </a>
          <a href={APP_LOGIN_URL} className="ghost-button min-w-36 px-5">
            <ArrowLeft size={18} aria-hidden="true" />
            קבל גישה למערכת
          </a>
        </div>

        <div className="grid gap-3 text-sm font-semibold text-zinc-300 sm:grid-cols-2 md:text-left">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-gold-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
