/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Dancing Script'],
      },
      backgroundImage: {
        openingBG: "url('/images/bg-opening.webp')",
        openingBGSM: "url('/images/bg-opening-sm.webp')",
        openingBGOverlay: "url('/images/bg-overlay.webp')",
      },
    },
  },
  plugins: [],
}
