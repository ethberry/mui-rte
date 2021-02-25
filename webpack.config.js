/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const {HotModuleReplacementPlugin} = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
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
  plugins: [
    new ProgressBarPlugin(),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "examples"),
    port: 9000,
    watchContentBase: true,
    host: "0.0.0.0",
  },
};
