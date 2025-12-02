/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A2540",
        slateText: "#4A5563",
        sage: "#B7C9A9",
        lightBg: "#F7FAFC"
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 35px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: [],
};

export default config;
