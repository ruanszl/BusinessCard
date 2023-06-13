/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },
      blur: {
        full: '194px',
      },

      backgroundImage: {
        app: 'url(/app-bg.png)',
      },
    },
  },
  plugins: [],
}
