const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[contenthash].js.map',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin()
  ],
  experiments: {
    topLevelAwait: true,
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  devServer: {
    'host': '0.0.0.0',
    'port': 8011,
    'progress': true,
    'hot': true,
    'historyApiFallback': true,
    'compress': true,

    // added because of bug in webpack, remove this once the bug is resolved
    'disableHostCheck': true,
  },

};
