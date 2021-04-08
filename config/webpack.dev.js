const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { getIP, root } = require("./utils");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: root(),
    publicPath: "/",
    filename: "js/[name].js",
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    stats: "minimal",
    host: getIP(),
    open: true,
    publicPath: "/",
    hot: true,
    port: "9595",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
