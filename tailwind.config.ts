import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          0: "var(--bg-0)",
          1: "var(--bg-1)",
          2: "var(--bg-2)",
        },
        rose: {
          100: "var(--rose-100)",
          300: "var(--rose-300)",
          500: "var(--rose-500)",
          600: "var(--rose-600)",
        },
        gold: {
          50: "#FFFDF5",
          100: "var(--gold-100)",
          200: "var(--gold-200)",
          300: "var(--gold-300)",
          400: "var(--gold-400)",
          500: "var(--gold-500)",
          600: "var(--gold-600)",
          surface: "var(--gold-surface-card)",
          border: "var(--gold-border)",
          highlight: "var(--gold-highlight)",
        },
        obsidian: {
          DEFAULT: "#111113",
          primary: "#0D0D0E",
          secondary: "#242428",
          interactive: "#111113",
          subtle: "rgba(17, 17, 19, 0.18)",
        },
        text: {
          hi: "var(--text-hi)",
          mid: "var(--text-mid)",
          low: "var(--text-low)",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0 10px 30px -10px rgba(90, 65, 10, 0.18)",
        goldglow: "0 10px 30px -10px rgba(90, 65, 10, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
