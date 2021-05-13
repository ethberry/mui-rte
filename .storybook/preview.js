import React from "react";

import {createMuiTheme, CssBaseline, ThemeProvider} from "@material-ui/core";

export const decorators = [
  Story => (
    <ThemeProvider theme={createMuiTheme()}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
