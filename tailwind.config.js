/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        wheat:'#f5deb3',
        orangered:'#ff5349',
        rebeccapurple:'#663399',
        lightwheat:'#f0ede9',
        milk:'#f5ebd9'
      },
      backgroundImage:{
        'PEC1':"url('pics/PECimg1.jpeg)",
        'PEC2': "url('pics/PEC SA img2.jpeg')"
      },
      shadow:{
        boxshadow:'1px 1px 3px 2px black'
      }
    },
  },
  plugins: [],
}
