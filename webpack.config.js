/* global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env;
const pkg = require('./package.json');
const HtmlWebpackPlugin = require("html-webpack-plugin");

let libraryName = 'comments-widget';

let outputFile, mode;

if (env === 'build') {
  mode = 'production';
  outputFile = libraryName + '.min.js';
} else {
  mode = 'development';
  outputFile = libraryName + '.js';
}

const config = {
  mode: mode,
  entry: __dirname + '/src/index.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname + '/public/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    compress: true,
    hot : true,
    port: 9000
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['*', '.js', '.jsx']
  }
};

module.exports = config;
