import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

export const decorators = [
  Story => (
    <ThemeProvider theme={createTheme()}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Story />
      </StyledEngineProvider>
    </ThemeProvider>
  ),
];
