/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.handlebars"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      backgroundImage: {
        "loupe": "url('/img/lupa.png')",
      },
    },
  },
  plugins: [],
}
