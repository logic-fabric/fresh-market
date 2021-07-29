const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      
      black: colors.black,
      white: colors.white,

      primary: colors.lime,
      secondary: colors.teal,
      tonic: colors.amber,

      neutral: colors.warmGray,
    },
    spacing: {
      0: "0",
      xs: "0.125rem",
      sm: "0.25rem",
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
      4: "4rem",
      5: "8rem",
      6: "16rem",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Lobster", "cursive"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
