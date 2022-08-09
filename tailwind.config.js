/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#1d4ed8',
        'secondary': '#1e293b',
        'textt': '#475569',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}