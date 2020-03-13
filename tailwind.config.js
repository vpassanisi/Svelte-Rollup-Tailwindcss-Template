const materialPalette = require("./materialPalette.js");

module.exports = {
  theme: {
    extend: {},
    colors: materialPalette,
    alphaColors: ["deep-purple.500"]
  },
  variants: {},
  plugins: [require("tailwindcss-bg-alpha")()]
};
