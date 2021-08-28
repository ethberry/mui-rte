import React from "react";

import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export const decorators = [
  Story => (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
