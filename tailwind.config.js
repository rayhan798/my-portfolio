/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
  
      keyframes: {
        'spin-right-custom': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'spin-left-custom': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' },
        },
        'counter-right-custom': {
          'to': { transform: 'rotate(-360deg)' },
        },
        'counter-left-custom': {
          'to': { transform: 'rotate(360deg)' },
        },
      },
    
      animation: {
        'spin-15-right': 'spin-right-custom 15s linear infinite',
        'spin-25-left': 'spin-left-custom 25s linear infinite',
        'spin-40-right': 'spin-right-custom 40s linear infinite',
        'counter-15-right': 'counter-right-custom 15s linear infinite',
        'counter-25-left': 'counter-left-custom 25s linear infinite',
        'counter-40-right': 'counter-right-custom 40s linear infinite',
      },
      colors: {
      
        'golden-yellow': '#B29B56', 
      },
    },
  },
  plugins: [],
};
