const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: ["./index.tsx"]
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: 3000
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(t|j)sx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      connectedComponents: path.resolve(__dirname, "src/connectedComponents")
    }
  }
};
