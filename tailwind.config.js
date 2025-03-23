/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14110F',
          light: '#34312D',
        },
        secondary: {
          DEFAULT: '#D9C5B2',
          light: '#F3F3F4',
        },
      },
    },
  },
  plugins: [],
};