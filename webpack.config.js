/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");


module.exports = {
  name: "mui-rte-example",
  mode: "development",
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: {
    bundle: "./examples/main.tsx",
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "examples"),
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  optimization: {
    minimize: process.env.NODE_ENV === "production",
    moduleIds: "named",
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "examples"),
    port: 9000,
    watchContentBase: true,
    host: "0.0.0.0",
  },
};
