/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#373B53',
        'cornflower-blue': '#7C5DFA',
        'heliotrope': '#9277FF',
        'mirage-one': '#1E2139',
        'ebony-clay': '#252945',
        'selago': '#DFE3FA',
        'bali-hai': '#888EB0',
        'ship-cove': '#7E88C3',
        'vulcan': '#0C0E16',
        'burnt-sienna': '#EC5757',
        'mona-lisa': '#FF9797',
        'whisper': '#F8F8FB',
        'mirage-two': '#141625',
        'fiord': '#494E6E',
        'white': '#FFFFFF',
        'shamrock': '#33D69F',
        'shamrock-opacity': '#F3FDFA',
      },

      boxShadow: {
        'invoice-item': '0px 10px 10px -10px rgba(72, 84, 159, 0.100397)'
      }
    },
  },
  plugins: [],
}
