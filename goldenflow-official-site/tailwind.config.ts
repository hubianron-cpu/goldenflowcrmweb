import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050506",
          900: "#0a0a0b",
          850: "#111113",
          800: "#171719",
        },
        gold: {
          300: "#f7d77a",
          400: "#e8bd54",
          500: "#c9932f",
          600: "#9f6f1e",
        },
      },
      boxShadow: {
        gold: "0 20px 80px rgba(201, 147, 47, 0.22)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.36)",
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at 70% 15%, rgba(232,189,84,.26), transparent 34%), radial-gradient(circle at 20% 35%, rgba(247,215,122,.12), transparent 28%)",
      },
    },
  },
  plugins: [],
};

export default config;
