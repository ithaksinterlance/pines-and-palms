module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
    screens: {
      's':{'min': '220px', 'max': '315px'},
      'xs':{'min': '316px', 'max': '413px'},
      '2xs':{'min': '414px', 'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px', 'max': '2563px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}