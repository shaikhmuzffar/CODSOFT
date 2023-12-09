/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textBlack: '#151619',
        myBlue:'#2B67E9',
        myPurple:'#B15EFF',
        myOrange:'#FF6000'
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

