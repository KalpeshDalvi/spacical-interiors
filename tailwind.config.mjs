/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
extend: {
  colors: {
    brand: {
      DEFAULT: "#BF360C",   // main color
      dark: "#A32E0A",
      light: "#FF7043",
    },
    navy: "#0A2540",
    slateText: "#4A5563",
    sage: "#B7C9A9",
    lightBg: "#F7FAFC",
  },

      // Fonts
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },

      // Shadows
      boxShadow: {
        card: "0 18px 35px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: [],
};

export default config;
