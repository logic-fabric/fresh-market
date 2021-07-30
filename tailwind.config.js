const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      none: "0px",
      xs: "0.125rem",
      sm: "0.25rem",
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
      full: "9999px",
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      xs: '0.125rem',
      sm: '0.25rem',
      1: '0.5rem',
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: colors.black,
      white: colors.white,

      primary: colors.lime,
      secondary: colors.teal,
      tonic: colors.amber,

      danger: colors.red,

      neutral: colors.warmGray,
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Lobster", "cursive"],
    },
    spacing: {
      0: "0",
      px: "0.0625rem",
      xs: "0.125rem",
      sm: "0.25rem",
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
      4: "4rem",
      5: "8rem",
      6: "16rem",
    },

    extend: {},
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
    },
  },
  plugins: [],
};
