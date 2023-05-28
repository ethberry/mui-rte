import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
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
    // @ts-ignore
    const { oneOf } = config.module.rules[4];
    // @ts-ignore
    const babelLoader = oneOf?.find(({ test }) => new RegExp(test).test(".ts"));
    if (babelLoader) {
      babelLoader.include = [/src/, /.storybook/];
      babelLoader.options.sourceType = "unambiguous";
    }
    return config;
  },
};

export default config;
