import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F7F8",
        ink: "#111111",
        muted: "#666666",
        faint: "#8C8C93",
        card: "#FFFFFF",
        line: "#E5E5E9",
        accent: {
          DEFAULT: "#463C8C",
          dark: "#2F2861",
          light: "#EEEBFA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1160px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(17,17,17,0.04), 0 8px 24px rgba(17,17,17,0.04)",
        lifted: "0 4px 10px rgba(17,17,17,0.05), 0 16px 40px rgba(17,17,17,0.07)",
      },
    },
  },
  plugins: [],
};
export default config;
