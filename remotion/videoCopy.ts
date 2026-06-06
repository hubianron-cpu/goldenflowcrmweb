export const VIDEO_CONFIG = {
  width: 1080,
  height: 1920,
  fps: 30,
  durationInFrames: 450,
};

export type LeadRowCopy = {
  name: string;
  status: string;
  action: string;
  urgent?: boolean;
};

export type LeadFollowupCopy = {
  brand: string;
  scene1: {
    headline: string;
  };
  scene2: {
    headline: string;
  };
  scene3: {
    headline: string;
    support: string;
    previewEyebrow: string;
    previewTitle: string;
    leadRows: LeadRowCopy[];
  };
  scene4: {
    headline: string;
    cards: string[];
    subtitles: string[];
  };
  scene5: {
    headline: string;
    cta: string;
    support?: string;
  };
};

export type DailyClosingActionCopy = {
  title: string;
  subtitle: string;
};

export type DailyClosingCopy = {
  scene1: {
    headline: string;
  };
  scene2: {
    headline: string;
  };
  scene3: {
    headline: string;
    support: string;
    actions: DailyClosingActionCopy[];
  };
  scene4: {
    headline: string;
  };
  scene5: {
    headline: string;
    cta: string;
    support: string;
  };
};

export const DAILY_CLOSING_COPY: DailyClosingCopy = {
  scene1: {
    headline: 'פותח את היום ולא יודע למי לחזור?',
  },
  scene2: {
    headline: 'GoldenFlow מסדרת לך את היום.',
  },
  scene3: {
    headline: 'מצב סגירה יומי',
    support: 'כל מה שצריך לקדם - במקום אחד',
    actions: [
      {
        title: 'לידים לטיפול היום',
        subtitle: 'מי מחכה לפולואפ',
      },
      {
        title: 'משימות פתוחות',
        subtitle: 'מה חייב לקרות היום',
      },
      {
        title: 'עסקאות לקידום',
        subtitle: 'איפה יש כסף שצריך להזיז',
      },
    ],
  },
  scene4: {
    headline: 'במקום לנחש - אתה פשוט פועל.',
  },
  scene5: {
    headline: 'נסה את GoldenFlowCRM',
    cta: '14 יום ללא עלות',
    support: 'כל יום מתחיל בפעולה ברורה',
  },
};

// Edit copy here when creating future Remotion versions.
export const LEAD_FOLLOWUP_AD_COPY: LeadFollowupCopy = {
  brand: 'GoldenFlowCRM',
  scene1: {
    headline: 'הליד לא נעלם.',
  },
  scene2: {
    headline: 'פשוט לא חזרת אליו בזמן.',
  },
  scene3: {
    headline: 'כסף שמחכה לפולואפ',
    support: 'GoldenFlow מראה לך למי לחזור - לפני שהליד מתקרר',
    previewEyebrow: 'פעולות להיום',
    previewTitle: 'לידים שדורשים פולואפ עכשיו',
    leadRows: [
      {name: 'דנה', status: 'ליד חם', action: 'לא הייתה פעולה 3 ימים', urgent: true},
      {name: 'יובל', status: 'ביקש פרטים', action: 'לחזור היום'},
      {name: 'מאיה', status: 'שיחת מכירה', action: 'פולואפ ב-18:00'},
    ],
  },
  scene4: {
    headline: 'כל יום מתחיל בפעולה ברורה',
    cards: ['עם מי לדבר היום', 'מה הפעולה הבאה', 'איפה כל עסקה עומדת'],
    subtitles: [
      'פולואפ לפני שהשיחה מתקררת',
      'הצעד הבא ברור, לא נשאר בראש',
      'מסלול מכירה בלי בלגן',
    ],
  },
  scene5: {
    headline: 'נסה את GoldenFlowCRM',
    cta: '14 יום ללא עלות',
    support: 'בלי לנחש. בלי לשכוח. בלי לאבד לידים.',
  },
};

export const LEAD_FOLLOWUP_HERO_COPY: LeadFollowupCopy = {
  brand: 'GoldenFlowCRM',
  scene1: {
    headline: 'הלידים שלך לא נעלמים.',
  },
  scene2: {
    headline: 'הם פשוט צריכים ניהול נכון.',
  },
  scene3: {
    headline: 'GoldenFlow עושה סדר במכירות',
    support: 'כל ליד, משימה ופולואפ - במקום אחד',
    previewEyebrow: 'תצוגת עבודה יומית',
    previewTitle: 'היום שלך מתחיל מסודר',
    leadRows: [
      {name: 'דנה', status: 'ליד חדש', action: 'לקבוע שיחת המשך'},
      {name: 'יובל', status: 'בתהליך', action: 'לשלוח הצעה היום'},
      {name: 'מאיה', status: 'מעקב', action: 'פולואפ ב-18:00'},
    ],
  },
  scene4: {
    headline: 'כל העבודה במקום אחד',
    cards: ['לידים לטיפול היום', 'המשימות שלי', 'מסלול המכירה'],
    subtitles: [
      'רשימת עבודה ברורה לכל יום',
      'משימות שלא נשארות בזיכרון',
      'תמונה מסודרת של כל עסקה',
    ],
  },
  scene5: {
    headline: 'נהל לידים כמו עסק רציני',
    cta: 'כניסה ל-14 יום ניסיון',
    support: 'סדר, מעקב ופולואפ במקום אחד.',
  },
};

export const LEAD_FOLLOWUP_COPY = LEAD_FOLLOWUP_AD_COPY;
