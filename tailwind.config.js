/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        midnight: {
          DEFAULT: "#0A0A12",
          light: "#161625",
          dark: "#050508",
        },
        gold: {
          DEFAULT: "#C5A059",
          muted: "#8A6E3D",
          bright: "#F3D08B",
        },
        violet: {
          deep: "#1A0B2E",
          glow: "#4C1D95",
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "breath": "breath 3s ease-in-out infinite",
      },
      keyframes: {
        breath: {
          "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.05)" },
        }
      }
    },
  },
  plugins: [],
}