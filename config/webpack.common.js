const path = require("path");
const webpack = require("webpack");
const { root } = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const DEV = process.env.npm_lifecycle_event === "dev";

module.exports = {
  entry: {
    index: "@app/index",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss"],
    alias: {
      "@app": root("app"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(tsx|ts)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { minimize: !DEV },
            },
          ],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { minimize: !DEV },
            },
            { loader: "postcss-loader" },
            { loader: "sass-loader" },
            {
              loader: "sass-resources-loader",
              options: {
                // it need a absolute path
                resources: [
                  path.resolve(__dirname, "../src/assets/style/_common.scss"),
                ],
              },
            },
          ],
        }),
      },
      {
        test: /\.(eot|ttf|woff)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: DEV ? "assets/[name].[ext]" : "../assets/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000,
              name: "static/img/[name].[ext]",
              publicPath: DEV ? "" : "/lib/activity_for_recital_contest/last/",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: process.env.NODE_ENV,
      template: "./public/index.html",
      filename: "./index.html",
      chunks: ["index", "vendor"],
    }),
    new ExtractTextPlugin({
      filename: "css/[name].css",
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        discardComments: { removeAll: true },
        // 避免 cssnano 重新计算 z-index
        safe: true,
      },
    }),
  ],
};
