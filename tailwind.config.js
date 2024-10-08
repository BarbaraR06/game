/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-medium': 'spin 2s linear infinite',
        'spin-fast': 'spin 1s linear infinite',
    },
    },
  },
  plugins: [],
}