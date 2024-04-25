/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggleOpen: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0px)' },
        }
      },
      keyframes: {
        wiggleClose: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        wiggleOpen: 'wiggleOpen 1s ease-in-out infinite',
        wiggleClose: 'wiggleClose 1s ease-in-out infinite',
      },
      fontFamily: {
        League: ["League Spartan", 'sans-serif']
      },
      colors: {
        dim: {
          50:  "#ffffff",
          100: "#e6f2f1",
          200: "#cde5e4",
          300: "#9cccc9",
          400: "#83c0bb",
          500: "#6ab3ae",
          600: "#52a6a0",
          700: "#399a93",
          800: "#208d85",
          900: '#088178',
        },
      },
    },
  },
  plugins: [],
}

