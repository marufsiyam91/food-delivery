/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily:{
      primary: ['Quicksand', 'sans-serif'],
      cursive: [ 'Caveat', 'cursive']
    },

    screens: {
      'esm': '500px',

      'sm': '600px',

      'md': '768px',

      'lg': '998px',

      'xl': '1024px',

      '2xl': '1280px',

      '4xl': '1444px'
    },
  },
  plugins: [],
}
