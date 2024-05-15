/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },

      animation: {
        'FadeIn': 'fadeIn 3s',
      }
    },

    fontFamily:{
      primary: ['Quicksand', 'sans-serif'],
      cursive: [ 'Caveat', 'cursive'],
      urbanist: ['Urbanist', 'sans-serif']
    },

    screens: {
      'esm': '500px',

      'sm': '640px',

      'md': '768px',

      'lg': '998px',

      'xl': '1024px',

      '2xl': '1280px',

      '4xl': '1444px'
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
