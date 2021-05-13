const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stories: ["../storybook/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app"],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
    });
    config.module.rules.push({
      test: /\.[tj]sx?$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: "babel-loader",
          options: {
            babelrc: false,
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
            plugins: [
              "optimize-clsx",
              "@babel/plugin-proposal-nullish-coalescing-operator",
              "@babel/plugin-proposal-optional-chaining",
            ],
          },
        },
      ],
    });
    return config;
  },
};
