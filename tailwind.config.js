/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hubotSans' : ['"Hubot Sans"', 'sans-serif'],
      },
      screens : {
        'sm' : '450px',
        'md': '512px',
        'lg': '1024px',
      }
    },
  },
  plugins: [],
}