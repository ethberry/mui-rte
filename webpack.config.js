/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");


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
        test: /\.[tj]sx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              sourceType: "unambiguous",
              presets: [
                [
                  "@babel/env",
                  {
                    modules: false,
                    targets: {
                      browsers: ["> 1%"],
                    },
                  },
                ],
                [
                  "@babel/typescript",
                  {
                    isTSX: true,
                    allExtensions: true,
                  },
                ],
                "@babel/react",
              ],
              plugins: ["optimize-clsx"],
            },
          },
        ],
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
  plugins: [new ProgressBarPlugin()],
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "examples"),
    port: 9000,
    watchContentBase: true,
    host: "0.0.0.0",
  },
};
