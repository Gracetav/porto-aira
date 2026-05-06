/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        beige: {
          light: '#FAF6F0',
          DEFAULT: '#F5F5DC',
        },
        brown: {
          dark: '#4A3022',
        },
        pink: {
          soft: '#FFB6C1',
          dusty: '#D8A7B1',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
