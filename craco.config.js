module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignore source map warnings for Flowbite
      webpackConfig.ignoreWarnings = [
        /Failed to parse source map/,
        /ENOENT: no such file or directory/,
        /flowbite/
      ];
      
      // Configure source-map-loader to ignore Flowbite files
      if (webpackConfig.module && webpackConfig.module.rules) {
        webpackConfig.module.rules.forEach(rule => {
          if (rule.use && Array.isArray(rule.use)) {
            rule.use.forEach(useItem => {
              if (useItem.loader && useItem.loader.includes('source-map-loader')) {
                useItem.options = useItem.options || {};
                useItem.options.filterSourceMappingUrl = (url, resourcePath) => {
                  // Ignore source maps for Flowbite files
                  if (resourcePath.includes('flowbite')) {
                    return false;
                  }
                  return true;
                };
              }
            });
          }
        });
      }
      
      return webpackConfig;
    },
  },
};