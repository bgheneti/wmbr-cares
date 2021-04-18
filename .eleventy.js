const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");
const pluginDate = require("eleventy-plugin-date");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginTailwindCSS, {
    src: "src/css/main.css",
    configFile: "src/tailwind.config.js"
  });
  eleventyConfig.addPlugin(pluginDate, {
    // Specify custom date formats
    formats: {
      // Change the readableDate filter to use abbreviated months.
      readableDate: { year: "numeric", month: "long", day: "numeric" },
      // Add a new filter to format a Date to just the month and year.
      readableMonth: { year: "numeric", month: "long" },
      // Add a new filter using formatting tokens.
      timeZone: "z",
    }
  });
  eleventyConfig.addCollection("allMedia", function(collectionApi) {
    return collectionApi.getFilteredByTag("interview").concat(collectionApi.getFilteredByTag("PSA"));
  });
  eleventyConfig.addCollection("organizationByDate", function(collection) {
    return collection.getFilteredByTag("organization").sort(function(a, b) {
        return ('' + a.data.title).localeCompare(b.data.title);
    });
  });
  eleventyConfig.addFilter("orgUrl", function(organizations, name) {
    return organizations.filter(x => x.data.title == name)[0].url;
  });
  eleventyConfig.addFilter("stripHttp", function(url) {
    return url.replace(/^https?:\/\//,'')
  });

  const md = new markdownIt({
    html: true
  });

  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

  return {
    dir: {
     input: "src"
    }
  };

};
