var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    // 'app': './js/main.js',
    'styles': './sass/main.scss'
  },
  output: {
    path: path.dirname(__dirname) + '/assets',
    filename: '[name].js'
  },
  devtool: '#cheap-module-source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/,
        loader: 'babel-loader' },
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader' } ) },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader' } ) },
      { test: /\.(woff2?|ttf|eot|svg|png|jpe?g|gif)$/,
        use: 'file-loader' }
    ]
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    })
  ],
  mode: "production"
};