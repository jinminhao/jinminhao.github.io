module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: {
    // Preserve classes toggled dynamically by JS (not in static HTML)
    standard: [
      "fa-sun",
      "fa-moon",
      "transition",
      "table-dark",
      "repo-img-light",
      "repo-img-dark",
    ],
    // Preserve any selector that contains data-theme (dark mode blocks)
    greedy: [/data-theme/],
  },
};
