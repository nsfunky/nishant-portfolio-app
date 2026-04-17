/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0B0E14",
          surface: "#1A1F2B",
          border: "#2A3345",
          text: "#E2E8F0",
          muted: "#94A3B8"
        },
        brand: {
          primary: "#3B82F6",
          secondary: "#10B981"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
