var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output:{
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};