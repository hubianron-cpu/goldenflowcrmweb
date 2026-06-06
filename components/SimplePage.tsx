import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { APP_LOGIN_URL } from "@/lib/constants";

type SimplePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  points?: string[];
};

export function SimplePage({ eyebrow, title, description, points = [] }: SimplePageProps) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      {points.length > 0 ? (
        <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="premium-surface p-4 text-sm font-bold leading-7 text-zinc-200">
              {point}
            </div>
          ))}
        </div>
      ) : null}

      <div className="mx-auto mt-9 max-w-4xl">
        <PageCta />
      </div>
    </PageShell>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="top" className="section-pad min-h-[70vh] bg-gold-radial">
        <div className="container-shell">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl xl:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
        {description}
      </p>
    </div>
  );
}

export function PageCta({ label = "כניסה למערכת GoldenFlow" }: { label?: string }) {
  return (
    <a href={APP_LOGIN_URL} className="gold-button">
      {label}
      <ArrowLeft size={18} aria-hidden="true" />
    </a>
  );
}
