/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      width: {
        58: '58rem',
      },
      colors: {
        blue: {
          1: '#3294F8',
          50: '#E7EDF4',
          100: '#C4D4E3',
          200: '#AFC2D4',
          300: '#7B96B2',
          400: '#3A536B',
          500: '#1C2F41',
          600: '#112131',
          700: '#0B1B2B',
          800: '#071422',
          900: '#040F1A',
        },
      },
    },
  },
  plugins: [],
}
