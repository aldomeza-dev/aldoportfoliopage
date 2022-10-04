/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js'],
  theme: {
    extend: {
      colors: {
        'space-cadet-black': '#2D3142',
        'munsell-blue': '#1b9aaa',
        'majorelle-purple': '#5647de',
        'medium-slate-purple': '#7568f0',
        'alabaster-white': 'e3e4db',
      },
      fontFamily: { 'Quicksand': ['Quicksand', 'sans-serif'] },
    },
  },
  plugins: [],
}
