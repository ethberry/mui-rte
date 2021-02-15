import React, {FC} from "react";
import {MuiThemeProvider} from "@material-ui/core";

import {MUIRichTextEditor} from "../../src";
import {defaultTheme} from "./theme";


const save = (data: string) => {
  console.log(data);
};

export const Theme: FC = () => {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <MUIRichTextEditor label="Type something here..." onSave={save} />
    </MuiThemeProvider>
  );
};
