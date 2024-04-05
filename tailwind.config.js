/* tailwind.config.cjs */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        highlight: '#eae8fb',
        bgGray: '#fbfafd',
      },
    },
  },
  plugins: [],
}