import { ThemeProvider } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

import { RichTextEditor } from "../../src";
import { defaultTheme } from "./theme";

export default {
  title: "Theme",
} as Meta<typeof RichTextEditor>;

type Story = StoryObj<typeof RichTextEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <RichTextEditor label="Type something here..." onSave={save} {...args} />
      </ThemeProvider>
    );
  },
};

export const Theme = Template;
