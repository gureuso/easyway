const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

module.exports = withCSS(withLess({
  webpack(config, options) {
    config.resolve.modules.unshift(__dirname);
    return config;
  }
}));
