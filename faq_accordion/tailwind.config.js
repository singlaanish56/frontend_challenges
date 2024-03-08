/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm:'375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors:{
        White: "hsl(0, 0%, 100%)",
        Lightpink: "hsl(275, 100%, 97%)",
        Grayishpurple: "hsl(292, 16%, 49%)",
        Darkpurple: "hsl(292, 42%, 14%)"        
      },
      fontFamily: {
        'myfont': ['"Work Sans', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

