/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        'space-cadet-black': '#2D3142',
        'dark-magenta': '#830F92',
        'cultured': '#F5F6F4',
      },
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Alexandria: ['Alexandria', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
