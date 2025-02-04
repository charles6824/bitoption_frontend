/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    animation: {
      spin: 'spin 1s linear infinite',
      marquee: 'marquee 30s linear infinite',
      slidein: 'slidein 0.2s linear'
      // marquee2: 'marquee2 30s linear infinite',
    },
    keyframes: {
      spin: {
        '0%' : {
          transform: 'rotate(0deg)'
        },
        '100%' :{
          transform: 'rotate(360deg)'
        }
      },

     slidein: {
        '0%': {
          transform: 'translateX(-100%)',
          opacity: '0'
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: '1'
        }
      },
      
      pulse :{
        '0%, 100%': {
          opacity: 1
        },
        '50%' : {
          opacity: .5
        }
      },
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      // marquee2: {
      //   '0%': { transform: 'translateX(100%)' },
      //   '100%': { transform: 'translateX(0%)' },
      // },
    },
    extend: {
    },
  },
  plugins: [],
}