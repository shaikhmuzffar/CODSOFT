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
        myPurple:'#7C59D4',
        // myPurple:'#B15EFF',
        
        myOrange:'#FF6000',
        myPink:'#F31559',
      },
      gridColumn: {
        'span-4h': 'span 4.5 / span 4.5',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

