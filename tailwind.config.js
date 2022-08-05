/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "*.{html,js}",
    "./js/movies.js",

  ],
  theme: {
    colors: {
      'colorLightChampagne': '#F6D8AE',
      'colorLightGray': '#EEEEEE',
      'colorBlueDark': '#3D5A6C',
      'colorPurpleDark': '#1F0322',
      'colorPurpleLight': '#DA4167',
      'colorblueLight': '#93C6D6',
    
    },
    fontFamily: {
      'mont': [ 'Montserrat', 'sans-serif'],
      'over': [ 'Overpass', 'sans-serif']
    },
  },
  extend: {
  },
  plugins: [],
}