const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { root } = require('./utils/utils');
const { PUBLIC_PATH, ENV, NEED_ANALYSIS } = require('./env/index');
const { compressCss } = require('./utils/compressCss');

const resetStyle = compressCss(resolve(__dirname, '../public/style/reset.css'));

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.ejs',
    filename: './index.html',
    templateParameters: {
      ENV,
      resetStyle,
    },
  }),
];

if (NEED_ANALYSIS) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: {
    index: '@app/index',
  },
  mode: ENV,
  output: {
    path: root('dist'),
    publicPath: PUBLIC_PATH,
    filename: 'js/[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    alias: {
      '@app': root('app'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            outputPath: 'static',
            name: '[name]_[contenthash:6].[ext]',
            publicPath: PUBLIC_PATH ? `${PUBLIC_PATH}static` : undefined,
          },
        },
      },
    ],
  },
  plugins,
};
