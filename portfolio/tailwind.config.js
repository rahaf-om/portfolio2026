/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#2C3E50',
          teal: '#18A497',
          orange: '#F39C12',
          light: '#ECF0F1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #2C3E50, #18A497)',
        'gradient-accent': 'linear-gradient(135deg, #18A497, #F39C12)',
      }
    },
  },
  plugins: [],
}
