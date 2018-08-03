const lessParser = require('postcss-less').parse;
// const lessParser = require('less');
// const lessParser = require('node-less');
//
module.exports = {
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  extensions: ['.less','.css'],
  processorOpts: {parser: lessParser},
  // preprocessCss: (data, filename) => {
    // return require('node-less').render({
    //   data,
    //   file: filename
    // }).css
    // return require('less').render(data);
    // return lessParser(data, filename);
  // },
  camelCase: true,
}

// module.exports = {
//   extensions: ['.scss','.css'],
//   preprocessCss: (data, filename) => {
//     console.log('run');
//     // return data
//     return require('node-sass').renderSync({
//       data,
//       file: filename
//     }).css
//   },
//   camelCase: true,
//   generateScopedName: '[name]__[local]__[hash:base64:8]'
// }