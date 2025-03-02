module.exports = function(eleventyConfig) {
  // Pass through folders for custom JS/CSS
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};