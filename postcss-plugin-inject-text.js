const path = require("path");

module.exports = (options = {}) => {
  return {
    postcssPlugin: "postcss-plugin-inject-text",
    Once(root) {
      const themePath = path.resolve("src/styles.css");

      root.prepend(`@reference "${themePath}";`);
    },
  };
};

module.exports.postcss = true;
