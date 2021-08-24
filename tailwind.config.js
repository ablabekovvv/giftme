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
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
