module.exports = {
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
  stories: ["../storybook/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-create-react-app",
      options: {
        craOverrides: {
          fileLoaderExcludes: ["less"],
        },
      },
    },
  ],
  webpackFinal: config => {
    const {
      module: {
        rules: [, , , , , { oneOf }],
      },
    } = config;
    const babelLoader = oneOf.find(({ test }) => new RegExp(test).test(".ts"));
    babelLoader.include = [/src/, /.storybook/];
    babelLoader.options.sourceType = "unambiguous";
    return config;
  },
};
