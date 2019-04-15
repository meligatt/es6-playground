var path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    arrays: './src/arrays/js/arrays.js',
    films: './src/films/js/films.js',
    form001: './src/form001/js/index.js',
    functions: './src/functions/js/index.js',
    game001: './src/game001/js/game.js',
    game002: './src/game002/js/index.js',
    game003: './src/game003/js/index.js',
    snippets: './src/snippets/js/app.js'
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
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
};