import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        brand: {
          50: "#f0f0ff",
          100: "#e4e3ff",
          200: "#cccbff",
          300: "#a9a6ff",
          400: "#8077ff",
          500: "#5b48fa",
          600: "#4a2ff1",
          700: "#3d1edd",
          800: "#3319b8",
          900: "#2c1996",
          950: "#1a0d62",
        },
        accent: {
          50: "#fff1f3",
          100: "#ffe4e8",
          200: "#ffccd4",
          300: "#ffa0b0",
          400: "#ff6680",
          500: "#f83155",
          600: "#e51042",
          700: "#c10839",
          800: "#a10935",
          900: "#890c32",
          950: "#4c0118",
        },
        surface: {
          0: "#ffffff",
          50: "#f8f8fc",
          100: "#f0f0f8",
          200: "#e2e2f0",
          800: "#1a1a2e",
          850: "#141428",
          900: "#0f0f1e",
          950: "#080814",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(ellipse at 20% 50%, rgba(91,72,250,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(248,49,85,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(91,72,250,0.08) 0%, transparent 50%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-in-left": "slideInLeft 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "glow-brand": "0 0 40px rgba(91,72,250,0.25)",
        "glow-accent": "0 0 40px rgba(248,49,85,0.2)",
        card: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        "card-hover":
          "0 16px 48px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)",
        "card-dark-hover":
          "0 16px 48px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
