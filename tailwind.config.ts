import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        "title-btn": "#2C0E3A",
        purple: {
          primary: "#6C63FF",
          dark: "#4F46E5",
          light: "#A5B4FC",
          softer: "#A78BFA",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#6C63FF",
          700: "#4F46E5",
          800: "#4338CA",
          900: "#3730A3",
        },
        ink: {
          DEFAULT: "#0F0F1A",
          secondary: "#4B5563",
          muted: "#9CA3AF",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F9FAFB",
          border: "#E5E7EB",
        },
        accent: {
          teal: "#06B6D4",
          gold: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        sora: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Desktop sizes
        "display-1": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-2": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-3": ["28px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "700" }],
      },
      boxShadow: {
        card: "0 4px 24px rgba(108, 99, 255, 0.08)",
        "card-hover": "0 8px 40px rgba(108, 99, 255, 0.15)",
        cta: "0 4px 16px rgba(108, 99, 255, 0.4)",
        "cta-hover": "0 8px 24px rgba(108, 99, 255, 0.5)",
      },
      borderRadius: {
        card: "16px",
        btn: "12px",
        pill: "999px",
        icon: "12px",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #F8F7FF 0%, #EEF2FF 50%, #F3F4FF 100%)",
        "purple-gradient": "linear-gradient(90deg, #6C63FF, #A78BFA)",
        "brand-gradient": "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
        "purple-cta":
          "linear-gradient(135deg, #6C63FF 0%, #8B5CF6 50%, #A78BFA 100%)",
        "radial-purple":
          "radial-gradient(ellipse at center, rgba(167, 139, 250, 0.25) 0%, rgba(108, 99, 255, 0.08) 40%, transparent 70%)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
