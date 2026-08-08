import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoldenFlow CRM",
  description: "מערכת חכמה לניהול לידים, משימות ומכירות",
  icons: {
    icon: "/brand/goldenflow-icon-gold.png",
    shortcut: "/brand/goldenflow-icon-gold.png",
    apple: "/brand/goldenflow-icon-gold.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050506",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
