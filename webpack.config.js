var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './js/main.js',
    films: './js/films.js'
  },
  
  output:{
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
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