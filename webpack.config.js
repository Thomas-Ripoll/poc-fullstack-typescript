var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/front/js/app.js',
  output: {
    path: path.resolve(__dirname, 'build/front/js'),
    filename: 'app.bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'build/front'),
    contentBasePublicPath: '/static',
    disableHostCheck: true,
    compress: true,
    port: 9000,
  },
};