const { root } = require("./utils/utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { PUBLIC_PATH, ENV } = require("./env/index");

module.exports = {
  entry: {
    index: "@app/index",
  },
  mode: ENV,
  output: {
    path: root("dist"),
    publicPath: PUBLIC_PATH,
    filename: "js/[name].js",
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
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-svg-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 10240,
            outputPath: "static",
            name: "[name]_[contenthash:6].[ext]",
            publicPath: PUBLIC_PATH ? `${PUBLIC_PATH}static` : undefined,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: process.env.NODE_ENV,
      template: "./public/index.html",
      filename: "./index.html",
      chunks: ["index", "vendor"],
    }),
  ],
};
