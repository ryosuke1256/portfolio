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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
