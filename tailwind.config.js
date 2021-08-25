// Para manejar los colores TailwindCSS
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  // Activamos el modo de tema oscuro TailwindCSS
  darkMode: 'class', // or 'media' or 'class'

  // Extendemos o configuramos el tema
  theme: {
    extend: {
      // Fuentes 
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif'],
        sans: ['Avenir', 'sans-serif'], // Probar con Avenir/Ubuntu
        serif: ['Merriweather', 'serif'],
      },

      // Colores
      colors: {
        // O puedo usar colors.
        'primary-light': '#F7F8FC',
        'secondary-light': '#f7f7f7',
        'ternary-light': '#f6f7f8',

        'primary-dark': '#0D2438',
        'secondary-dark': '#102D44',
        'ternary-dark': '#1E3851',

        'title-light': '#363636',
        'subtitle-light': '#4a4a4a',
        'text-light': '#111827',

        'title-dark': '##f7f7f7',
        'subtitle-dark': '#93C5FD',
        'text-dark': '#F9FAFB',

      },

// Adaptación a dispositivos. Me baso en los de Bula y TailwindCSS
// https://tailwindcss.com/docs/responsive-design
// https://bulma.io/documentation/overview/responsiveness/
screens: {
  'mobile': '640px',
    // => @media (min-width: 640px) { ... }

    'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'desktop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'widescreen': '1280px',
          // => @media (min-width: 1280px) { ... }

          'fullhd': '1408px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
variants: {
  extend: { },
},
plugins: [
  // Por si quiero usar Forms https://github.com/tailwindlabs/tailwindcss-forms
  require('@tailwindcss/forms'),
],
}
