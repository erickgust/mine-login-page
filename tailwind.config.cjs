/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mine-background': `
          linear-gradient(to top, rgba(18, 18, 18), rgba(18, 18, 18, 0.7) 15%, transparent 30%),
          linear-gradient(to bottom, rgba(18, 18, 18), rgba(18, 18, 18, 0.7) 15%, transparent 30%),
          url('./src/assets/background.jpg')
        `,
      }
    },
  },
  plugins: [],
}
