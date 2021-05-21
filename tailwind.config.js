module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        borderWidth: {
          DEFAULT: '1px',
          '0': '0',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '6': '6px',
          '8': '8px',
          '16': '16px',
        },
        
      backgroundImage: {
        'hero-lg': "url('public/img/careersinursing.jpg')",
    },
      colors: {
        primary: '#4A89C5',
        secondary: '#203684',
        tedpink: '#B04389',
        tedpurple: '#753784', 
        tedblue: '#318ACA', 
        tedblueDark: '#203684',
        tedblue300: '#3460A5',
        tedgreen: '#45AC37', 
        tedgreen300: '#306A38',
        tedorange300: '#850000',
        tedgray: '#F6F5F5',
        tedlightBlue: '#D0E1F1',
    
      }
    },
    fontFamily: {
      body: ['Calibri']
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
