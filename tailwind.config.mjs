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
        brand: "#E65126",        // Primary brand orange
        brandDark: "#BF360C",    // Darker orange for hover states
        brandDeep: "#3B0D06",    // Deep brown for footer
        brandText: "#2C1810",    // Rich dark brown for text
        brandAccent: "#FF7043",  // Light coral accent
        cream: "#FDF8F3",        // Warmer cream background
        cardBg: "#FFFFFF",       // Pure white for cards
        subtleText: "#6B463B",   // Muted brown for secondary text
        slateText: "#475569",    // Modern slate for neutral text
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px rgba(230, 81, 38, 0.08)",
        cardHover: "0 20px 50px rgba(230, 81, 38, 0.15)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    }
  },
  plugins: [],
};

export default config;
