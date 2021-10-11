module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mm': '375px'
      },
      width: {
        '768px': '768px',
        '425px': '425px'
      },
      height: {
        '22': '5.5rem'
      },
      colors: {
        'main-green': '#228662',
        'footer-icons': '#07622F',
        'secondary-green': '#1E7153',
        'pay-icon-footer': '#00AB4A',
        'main-gray': '#E5F7F5',
        'gray-icons': '#697075',
        'main-dark': '#32383D',
      },
      borderWidth: {
        '3': '3px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
