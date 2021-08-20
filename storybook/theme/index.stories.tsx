import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { Story } from "@storybook/react";

import { IRichTextEditorProps, RichTextEditor } from "../../src";
import { defaultTheme } from "./theme";

export default {
  title: "Theme",
};

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RichTextEditor label="Type something here..." onSave={save} {...args} />
    </ThemeProvider>
  );
};

export const Theme = Template.bind({});
