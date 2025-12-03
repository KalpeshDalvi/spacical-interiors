/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#E65126",        // Primary brand (warm orange)
        brandDark: "#A4381F",    // Darker variant for hover / accents
        brandText: "#3B0D06",    // Dark text color (brownish)
        cream: "#FDF2E9",        // Soft background base
        cardBg: "#FFFFFF",       // Card / section backgrounds
        subtleText: "#6B463B",   // Muted paragraph / secondary text
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 35px rgba(15, 23, 42, 0.12)",
      },
    }
  },
  plugins: [],
};

export default config;
