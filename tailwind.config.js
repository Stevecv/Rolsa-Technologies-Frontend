/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F8F8F8',
        'background-secondary': '#EFCB96',
        'primary': '#B1CA7F',
        'secondary': '#D56144',
        'brown-background': '#866652',

        'navbar-background': '#D9D9D9',


        'dark-background': '#121212',
        'dark-background-secondary': '#1D1D1D',

        'dark-navbar-background': '#292929',
      }
    }
  },
  plugins: [],
}




