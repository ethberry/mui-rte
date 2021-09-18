import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const decorators = [
  Story => (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
