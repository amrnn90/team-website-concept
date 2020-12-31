const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
    },
    extend: {
      spacing: {
        infinite: '9999px',
        ...[10, 20, 30, 40, 50, 60, 70, 80, 90].reduce(
          (acc, val) => Object.assign(acc, { [`${val / 10}vw`]: `${val}vw` }),
          {}
        ),
      },
      colors: {
        primary: {
          100: '#D9F1F9',
          DEFAULT: '#0BBEF2',
        },

        accent: {
          DEFAULT: '#FFB200',
        },
      },
      fontFamily: {
        sans: 'Cabin, Helvetica, Arial, sans-serif',
      },
      minHeight: {
        hero: '700px',
      },
      minWidth: (theme) => {
        return theme('spacing')
      },
      strokeWidth: {
        3: '3',
        4: '4',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
