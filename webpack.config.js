var path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/js/app.js',
    films: './src/js/films.js'
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
  devtool: 'source-map',
};