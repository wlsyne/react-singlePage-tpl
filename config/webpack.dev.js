const webpack = require("webpack");
const { merge } = require("webpack-merge");

const { generateScopedName } = require("./utils/generateScopedName");
const common = require("./webpack.common");

module.exports = merge(common, {
  devtool: "eval-cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: "9595",
    stats: "minimal",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                getLocalIdent(context, localIdentName, localName) {
                  return generateScopedName(localName, context.resourcePath);
                },
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
