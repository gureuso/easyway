const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withImages = require('next-images')

module.exports = withCSS(withLess(withImages({
  webpack(config, options) {
    config.resolve.modules.unshift(__dirname);
    return config;
  }
})));
