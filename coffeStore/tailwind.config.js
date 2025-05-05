/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        formbg: 'rgb(244, 243, 240)',
        btnbg: 'rgb(210, 180, 140)',
        btncl: 'rgb(227, 181, 119)',
        iconbg: 'rgb(236, 234, 227);',
      },
      fontFamily:{
        rancho: "Rancho",
        raleway: "Raleway"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

