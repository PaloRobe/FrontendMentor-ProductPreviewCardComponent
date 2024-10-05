/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Monstserrat:["Montserrat", "sans-serif"],
        Fraunces:["Fraunces", "serif"]
      },
      colors:{
        DarkCyan:"hsl(158, 36%, 37%)",
        Cream: "hsl(30, 38%, 92%)",
        VeryDarkBlue: "hsl(212, 21%, 14%)",
        DarkGrayishBlue:"hsl(228, 12%, 48%)",
        White: "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [
    plugin(function({ addBase }) {
     addBase({
        'html': { fontSize: "14px" },
      })
    }),
  ],
}

