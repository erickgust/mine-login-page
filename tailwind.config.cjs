/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mine-background': `
          linear-gradient(to top, rgba(18, 18, 18), rgba(18, 18, 18, 0.7) 18%, transparent 40%),
          linear-gradient(to bottom, rgba(18, 18, 18), rgba(18, 18, 18, 0.7) 18%, transparent 40%),
          url('/src/assets/background.jpg')
        `,
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}
