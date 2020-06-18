// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      colors: {
        font: '#c9cacc',
        background: '#1d1f21',
        primary: '#2bbc8a',
        secondary: '#ccffb6',
        tertiary: `#666`,
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities, theme }) {
      const themeColors = theme('colors');
      const newUtilities = {
        '.title': {
          color: themeColors.primary,
          fontSize: '1.25rem',
          fontWeight: '600',
          marginTop: '4rem',
          marginBottom: '1rem',
          letterSpacing: '0.01em',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
