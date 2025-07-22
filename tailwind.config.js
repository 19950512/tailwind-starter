/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./*.html', './script.js'],
  theme: {
    extend: {
      colors: {
        primary: { light: '#1fb6ff', DEFAULT: '#0ea5e9', dark: '#0284c7' },
        accent: { light: '#ff7ce5', DEFAULT: '#ff49db', dark: '#ff16d1' },
      },
    },
  },
};
