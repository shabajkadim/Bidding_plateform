/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        scroll:{
          '0%':{transform:'translateX(0)'},
          '100%':{transform:'translateX(-360%)'},
        },
      },
      animation:{
        scroll:'scroll 10s linear infinite',
      }
    },
  },
  plugins: [],
}


