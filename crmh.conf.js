// const lessParser = require('postcss-less').parse;
// const lessParser = require('less');
const lessParser = require('node-less');

module.exports = {
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  extensions: ['.less'],
  processorOpts: {parser: lessParser},
  preprocessCss: (data, filename) => {
    return require('less').render(data);
    // return lessParser(css, filename);
  },
  camelCase: true,
}