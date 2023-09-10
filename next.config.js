const withImages = require('next-images')

module.exports = withImages({
  webpack5: false,
  webpack(config, options) {
    config.resolve.modules.unshift(__dirname);
    return config;
  }
});
