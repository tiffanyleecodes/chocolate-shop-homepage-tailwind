/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      tablet: "768px",
      // => @media (min-width: 640px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      white: "#ffffff",
      lightGray: "#eae7e7",
      pink: "#c6978e",
      brown: "#432d27",
      mocha: "#985e49",
      milktea: "#d7b7a3",
      transparent: "transparent",
    },
    extend: {
      height: {
        128: "30rem",
      },
    },
    fontFamily: {
      fair: ["Playfair Display", "serif"],
    },
  },
  plugins: [],
};
