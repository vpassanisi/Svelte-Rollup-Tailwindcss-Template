const materialPalette = require("./materialPalette.js");

module.exports = {
  theme: {
    extend: {},
    colors: materialPalette
  },
  variants: {},
  plugins: [require("tailwindcss-bg-alpha")()],
  alphaColors: ["black"]
};
