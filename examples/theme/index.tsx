import React, {FC} from "react";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

import {MUIRichTextEditor} from "../../src";


export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

Object.assign(defaultTheme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        backgroundColor: "#ebebeb",
      },
      container: {
        display: "flex",
        flexDirection: "column-reverse",
      },
      editor: {
        backgroundColor: "#ebebeb",
        padding: "20px",
        height: "200px",
        maxHeight: "200px",
        overflow: "auto",
      },
      toolbar: {
        borderTop: "1px solid gray",
        backgroundColor: "#ebebeb",
      },
      placeHolder: {
        backgroundColor: "#ebebeb",
        paddingLeft: 20,
        width: "inherit",
        position: "absolute",
        top: "20px",
      },
      anchorLink: {
        color: "#333333",
        textDecoration: "underline",
      },
    },
  },
});

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
