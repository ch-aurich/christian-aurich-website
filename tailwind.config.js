/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./impressum.html",
    "./datenschutz.html"
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A3A',
        'navy-elevated': '#243A4D',
        'navy-deep': '#121E29',
        graphite: '#4A5560',
        cream: '#F5F1EA',
        bronze: '#B8863C',
        'bronze-light': '#D9A85C',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}