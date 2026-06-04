import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

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
      <div className="container-shell grid gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold-300/30 bg-ink-950/80 p-1.5">
              <Image
                src="/brand/goldenflow-icon.png"
                alt="GoldenFlow"
                width={128}
                height={128}
                loading="eager"
                unoptimized
                className="h-full w-full max-w-full object-contain"
              />
            </span>
            <span className="text-xl font-black text-white">GoldenFlow CRM</span>
          </div>
          <p className="mt-4 max-w-xl leading-7 text-zinc-400">
            מערכת חכמה לניהול לידים, משימות ומכירות.
          </p>
          <p className="mt-6 text-sm text-zinc-500">© GoldenFlow. All rights reserved.</p>
        </div>

        <div className="grid gap-3 text-sm font-semibold text-zinc-300 sm:grid-cols-2 md:text-left">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-gold-300">
              {link.label}
            </a>
          ))}
          <a href={whatsappUrl} className="mt-3 inline-flex items-center gap-2 text-gold-300 sm:col-span-2">
            <MessageCircle size={17} aria-hidden="true" />
            דבר איתי בוואטסאפ
          </a>
        </div>
      </div>
    </footer>
  );
}
