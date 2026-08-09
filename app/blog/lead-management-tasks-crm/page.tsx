import type { Metadata } from "next";
import { LeadManagementArticle } from "@/components/blog/LeadManagementArticle";

const canonical = "https://www.goldenflowcrm.com/blog/lead-management-tasks-crm";
const title = "מערכת לניהול לידים ומשימות: המדריך המלא | GoldenFlow CRM";
const description =
  "מהי מערכת לניהול לידים ומשימות ואיך היא עוזרת לעסק? מדריך לניהול לידים, פולואפים, משימות ותהליך המכירה עם GoldenFlow CRM.";
const ogImage = `${canonical}/og.png`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "מערכת לניהול לידים ומשימות",
    "מערכת לניהול לידים",
    "מערכת CRM",
    "ניהול לידים",
    "ניהול משימות",
    "מעקב אחרי לידים",
    "פולואפ ללקוחות",
    "CRM לעסק קטן",
    "מערכת לניהול מכירות",
    "תהליך מכירה",
    "Sales Pipeline",
  ],
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "he_IL",
    url: canonical,
    siteName: "GoldenFlow CRM",
    title,
    description,
    publishedTime: "2026-08-09T00:00:00+03:00",
    modifiedTime: "2026-08-09T00:00:00+03:00",
    authors: ["GoldenFlow CRM"],
    images: [
      {
        url: ogImage,
        width: 1731,
        height: 909,
        alt: "מערכת לניהול לידים ומשימות – המדריך המלא",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function LeadManagementTasksCrmPage() {
  return <LeadManagementArticle />;
}
