const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { generateScopedName } = require('./utils/generateScopedName');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: 'js/[name].[contenthash:6].js',
  },
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                getLocalIdent(context, localIdentName, localName) {
                  return generateScopedName(localName, context.resourcePath);
                },
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  optimization: {
    // splitChunks: {
    //   name: 'vendor',
    //   chunks: 'initial',
    // },
    usedExports: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css',
    }),
    new CleanWebpackPlugin(),
  ],
});
