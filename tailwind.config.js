const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/Layout/Layout.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlack: '#37393b',
        customColor: colors.red,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
