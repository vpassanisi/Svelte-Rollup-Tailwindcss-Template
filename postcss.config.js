const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./**/**/*.html", "./**/**/*.svelte"],
  whitelist: ["mode-dark", "input"],
  whitelistPatterns: [/svelte-/],

  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(production ? [purgecss] : []),
  ],
};
