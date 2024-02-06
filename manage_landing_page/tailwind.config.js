/*eslint no-undef: "error"*/
/*eslint-env node*/

module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        orangeRed: 'hsl(12,88%, 59%)',
        paleOrangeRed: 'hsl(12,88%, 69%)',
        barelyOrangeRed: 'hsl(12,88%, 95%)',
        superBarelyOrangeRed: 'hsl(12,100%, 95%)',
        darkBlue: 'hsl(228,39%, 23%)',
        superDarkBlue: 'hsl(228,12%, 12%)',
        paleGrayDarkBlue: 'hsl(228,12%, 61%)',
        paleGray: 'hsl(0,0%, 98%)'
      }

    },
  },
  plugins: [],
}

