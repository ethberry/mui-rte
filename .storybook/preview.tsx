import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={createTheme()}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Story />
      </StyledEngineProvider>
    </ThemeProvider>
  ),
];

const parameters = {
  actions: { argTypesRegex: "^on.*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

const preview: Preview = {
  decorators,
  parameters,
};

export default preview;
