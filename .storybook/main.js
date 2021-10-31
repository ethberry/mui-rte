module.exports = {
  stories: ["../storybook/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/preset-create-react-app"],
  webpackFinal: config => {
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
              [
                "@babel/react",
                {
                  runtime: "automatic",
                },
              ],
            ],
            plugins: [
              "optimize-clsx",
              "@babel/plugin-proposal-nullish-coalescing-operator",
              "@babel/plugin-proposal-optional-chaining",
              "babel-plugin-inline-import",
            ],
          },
        },
      ],
    });
    return config;
  },
};
