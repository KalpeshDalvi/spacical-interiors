/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/*.{js,ts,jsx,tsx,mdx}",           // root files (layout.tsx, page.tsx)
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // all nested files
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // components
    "./pages/**/*.{js,ts,jsx,tsx}",          // pages (if used)
    "./public/**/*.{html,js}"                // static content
  ],
  theme: {
    extend: {
      colors: {
        brand: "#E65126",
        brandDark: "#A4381F",
        brandText: "#3B0D06",
        cream: "#FDF2E9",
        cardBg: "#FFFFFF",
        subtleText: "#6B463B",
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
