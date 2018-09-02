const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=stage-2'],
      },
    ],
  },
  devServer: {
    publicPath: '/dist/',
  },
};
