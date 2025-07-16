const babel = require('babel-jest');

module.exports = babel.createTransformer({
  configFile: './babel.config.custom.js',
});
