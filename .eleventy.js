
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // Add a shortcode for item cards
  eleventyConfig.addShortcode("itemCard", function(title, image, description) {
    return `
      <div class="item-card">
        <h2>${title}</h2>
        <img src="${image}" alt="${title}" class="items-image">
        <p class="item-desc">${description}</p>
      </div>
    `;
  });
};
