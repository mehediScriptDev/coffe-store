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
        textcl:'rgb(51, 26, 21)',
        littlebg: 'rgb(245, 244, 241);',
        eyebg: ' rgb(210, 180, 140);',
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

