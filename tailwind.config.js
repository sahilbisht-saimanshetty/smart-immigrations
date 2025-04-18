/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mid-2xl':"1400px",
        '3xl': '1600px', // Custom breakpoint for large screens
        '4xl': '1700px', // Custom breakpoint for ultra-wide screens
        '5xl': '1820px', // Custom breakpoint for ultra-wide screens
        '6xl': '2000px',
      },
    },
  },
  plugins: [],
};
