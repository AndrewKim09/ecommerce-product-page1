/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend:{screens: {
      sm: {'max': '639px'},
      lg: {'min': '640px'},
    }},
  },
  plugins: [],
}

