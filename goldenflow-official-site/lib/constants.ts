export const WHATSAPP_PHONE = "972524780853";
export const WHATSAPP_MESSAGE =
  "מעוניין לקבל פרטים נוספים על GoldenFlow";

export const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const navItems = [
  { label: "איך זה עובד", href: "#how-it-works" },
  { label: "פיצ׳רים", href: "#features" },
  { label: "מרכז ROI", href: "#roi" },
  { label: "למי זה מתאים", href: "#audience" },
  { label: "מחיר", href: "#pricing" },
  { label: "צור קשר", href: "#contact" },
];

export const primaryCta = "קבל פרטים על GoldenFlow";
