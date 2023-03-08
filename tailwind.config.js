/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#8BC34A',
      },
      secondary: {
        DEFAULT: '#689F38',
      },
      tertiary: {
        DEFAULT: '#558B2F',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      black: {
        DEFAULT: '#00000',
      }
    },
    extend: {
    },
  },
  plugins: [],
}
