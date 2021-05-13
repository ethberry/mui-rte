import React, {FC} from "react";
import {MuiThemeProvider} from "@material-ui/core";

import {RichTextEditor} from "../../src";
import {defaultTheme} from "./theme";

const save = (data: string) => {
  console.info(data);
};

export const Theme: FC = () => {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <RichTextEditor label="Type something here..." onSave={save} />
    </MuiThemeProvider>
  );
};
