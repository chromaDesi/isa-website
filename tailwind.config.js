const scrollbarHide = require('tailwind-scrollbar-hide');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
      },
      keyframes: {
        scrollUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' }, // Only translate by half to create seamless loop
        },
        scrollDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        'scroll-vertical': 'scrollUp 10s linear infinite',
        'scroll-vertical-down': 'scrollDown 10s linear infinite',
      },
    },
  },
  plugins: [
    scrollbarHide,
  ],
};