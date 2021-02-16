import React, {FC} from "react";
import {MuiThemeProvider} from "@material-ui/core";

import {RichTextEditor} from "../../src/components/editor";
import {defaultTheme} from "./theme";


const save = (data: string) => {
  console.log(data);
};

export const Theme: FC = () => {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <RichTextEditor label="Type something here..." onSave={save} />
    </MuiThemeProvider>
  );
};
