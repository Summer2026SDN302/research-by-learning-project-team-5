/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0faf0',
          100: '#dcf5dc',
          500: '#2d7d32',
          600: '#1b5e20',
          700: '#155215',
          DEFAULT: '#2d7d32',
        },
        dark: {
          800: '#1a2332',
          900: '#0f1923',
        }
      }
    },
  },
  plugins: [],
}
