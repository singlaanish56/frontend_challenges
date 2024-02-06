/*eslint no-undef: "error"*/
/*eslint-env node*/

module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm:'375px'
    }
    extend: {
      colors:{
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 20%)',
        darkGrey: 'hsl(0, 0%, 12%)',
        offBlack: 'hsl(0, 0%, 8%)',
        green: 'hsl(75, 94%, 57%)'
      },
      fontFamily:{
        'inter':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}