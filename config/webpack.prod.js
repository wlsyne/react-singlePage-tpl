const webpack = require('webpack');
const { root } = require('./webpack.util');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = webpackMerge(common, {
  mode: 'production',
  output: {
    path: root('dist'),
    publicPath: './',
    filename: 'js/[name].js'
  }
});