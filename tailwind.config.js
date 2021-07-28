module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        green: {
          light: '#378d60',
          DEFAULT: '#067139',
          dark: '#002110',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
