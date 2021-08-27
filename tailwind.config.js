module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      white: '#ffffff',
      primary: '#1DB3C3',
      purple: '#EAE8FF',
      red: '#FA0707',
      yellow: '#F2C94C',
      purpleWhite: '#EAE8FF',
      purpleDark: '#877CFF',
      black : '#000000',
    },
    extend: {
      fontFamily: {
        "monsterrat": "'Montserrat', sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
