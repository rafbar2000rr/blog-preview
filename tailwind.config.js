/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css}"],
  theme: {
    extend: {colors: {
      
      Yellow: 'hsl(47, 88%, 63%)',
      White: 'hsl(0, 0%, 100%)',
      
    },
          fontFamily: {
      figtree: ['Figtree', 'sans-serif'],
    }
    }
  },
  plugins: [],
  

}
