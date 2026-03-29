import { ThemeProvider } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

import { MuiDraftJsEditor } from "../../src";
import { defaultTheme } from "./theme";

export default {
  title: "Theme",
} as Meta<typeof MuiDraftJsEditor>;

type Story = StoryObj<typeof MuiDraftJsEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <MuiDraftJsEditor label="Type something here..." onSave={save} {...args} />
      </ThemeProvider>
    );
  },
};

export const Theme = Template;
