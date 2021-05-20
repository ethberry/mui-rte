import React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {Story} from "@storybook/react";

import {IRichTextEditorProps, RichTextEditor} from "../../src";
import {defaultTheme} from "./theme";

export default {
  title: "Theme",
};

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <RichTextEditor label="Type something here..." onSave={save} {...args} />
    </MuiThemeProvider>
  );
};

export const Theme = Template.bind({});
