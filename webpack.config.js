var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    game001: './src/game001/js/index.js',
    snippets: './src/snippets/js/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'apps/[name]/build/bundle.js'
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
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: 'file-loader?name=[hash:base64:7].[ext]',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['game001'],
      filename: 'apps/game001/build/index.html',
      template: 'src/game001/index.html',
      favicon: './public/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['snippets'],
      filename: 'apps/snippets/build/index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index.html',
      template: './public/main.html',
      favicon: './public/favicon.ico'
    })
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};