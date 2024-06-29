/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [

    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        // background: "#fcfaf9",
        background: "#ffff",
        "light-pink": "#efece9",
        "dark-pink": "#e7d7ca",
        "dark-brown": "#4d3433",
      },
      transitionDuration: {
        3000: "3000ms",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}