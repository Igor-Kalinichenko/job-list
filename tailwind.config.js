/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainBgColor: '#F5F5F5',
        textColorH2: '#3A4562',
        textColorH2Hover: '#5876C5',
        textColorSub: '#878D9D'
      },
      fontFamily: {
        'sans': 'Roboto'
      }
    },
  },
  plugins: [],
}
