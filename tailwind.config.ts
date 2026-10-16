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
        rosegold: {
          50: "#FFF5F2",
          100: "var(--rosegold-100)",
          200: "var(--rosegold-200)",
          300: "var(--rosegold-300)",
          400: "var(--rosegold-400)",
          500: "var(--rosegold-500)",
          600: "var(--rosegold-600)",
          surface: "var(--rosegold-surface-card)",
          border: "var(--rosegold-border)",
          highlight: "var(--rosegold-highlight)",
        },
        rose: {
          100: "var(--rosegold-100)",
          300: "var(--rosegold-300)",
          500: "var(--rosegold-500)",
          600: "var(--rosegold-600)",
        },
        gold: {
          50: "#FFF5F2",
          100: "var(--rosegold-100)",
          200: "var(--rosegold-200)",
          300: "var(--rosegold-300)",
          400: "var(--rosegold-400)",
          500: "var(--rosegold-500)",
          600: "var(--rosegold-600)",
          surface: "var(--rosegold-surface-card)",
          border: "var(--rosegold-border)",
          highlight: "var(--rosegold-highlight)",
        },
        obsidian: {
          DEFAULT: "#111113",
          primary: "#0D0D0E",
          secondary: "#241E1F",
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
        glow: "0 10px 30px -10px rgba(110, 48, 38, 0.16)",
        rosegoldglow: "0 10px 30px -10px rgba(110, 48, 38, 0.22)",
        goldglow: "0 10px 30px -10px rgba(110, 48, 38, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
