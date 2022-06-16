const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/Layout/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlack: '#37393b',
        primaryColor: '#EEF6F9',
        customColor: colors.red,
      },
      fontSize: {
        '2.5xl': ['1.75rem', '1.9rem'],
      },
      screens: {
        xsm: '305px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
