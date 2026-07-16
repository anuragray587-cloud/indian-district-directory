import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Light "survey paper" surface
        paper: "#F5F4EF",
        "paper-card": "#FBFAF5",
        // Dark "ink wash" surface
        night: "#14161F",
        "night-card": "#1B1E29",
        // Ink (text) - indigo-charcoal, works as primary text in light mode
        // and is inverted to a warm paper tone in dark mode via CSS vars.
        ink: "#1B2340",
        "ink-soft": "#565B72",
        "ink-invert": "#ECE8DA",
        "ink-invert-soft": "#ADAA9C",
        // Rules / hairlines
        rule: "#DDD9CC",
        "rule-dark": "#2B2E3B",
        // Signature accent: marigold / turmeric gold
        gold: {
          50: "#FBF3E3",
          100: "#F5E4BE",
          300: "#E4B85C",
          400: "#D9A441",
          500: "#C8912B",
          600: "#A9711F",
          700: "#8A5A18",
        },
        // Secondary accent, used sparingly (UT marker)
        teal: {
          500: "#1F6F5C",
          600: "#175A4A",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
