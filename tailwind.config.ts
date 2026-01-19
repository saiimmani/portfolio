import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Display'",
          "'SF Pro Text'",
          ...defaultTheme.fontFamily.sans
        ]
      },
      colors: {
        surface: {
          light: "rgba(255,255,255,0.65)",
          dark: "rgba(20,20,22,0.65)"
        },
        accent: {
          DEFAULT: "#0A84FF",
          soft: "#5AC8FA"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.12)",
        glow: "0 0 0 1px rgba(255,255,255,0.2) inset"
      },
      backdropBlur: {
        glass: "12px"
      },
      borderRadius: {
        xl: "1.25rem"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        float: "float 10s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
