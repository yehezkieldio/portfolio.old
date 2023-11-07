/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 2s infinite",
      },
      fontFamily: {
        sans: ["'Manrope Variable'", "sans-serif"],
      },
      colors: {
        aztec: {
          50: "#f4f9f7",
          100: "#daede6",
          200: "#b4dbcd",
          300: "#87c1b0",
          400: "#5ea391",
          500: "#448877",
          600: "#346d60",
          700: "#2d584f",
          800: "#274841",
          900: "#243d37",
          950: "#0b1715",
        },
      },
    },
  },
  plugins: [],
};
