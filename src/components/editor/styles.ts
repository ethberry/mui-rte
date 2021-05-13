import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(
  theme => ({
    root: {},
    container: {
      margin: theme.spacing(1, 0, 0, 0),
      position: "relative",
      fontFamily: theme.typography.body1.fontFamily,
      fontSize: theme.typography.body1.fontSize,
      "& figure": {
        margin: 0,
      },
    },
    inheritFontSize: {
      fontSize: "inherit",
    },
    editor: {},
    editorContainer: {
      margin: theme.spacing(1, 0, 0, 0),
      cursor: "text",
      width: "100%",
      padding: theme.spacing(0, 0, 1, 0),
    },
    editorReadOnly: {
      borderBottom: "none",
    },
    error: {
      borderBottom: "2px solid red",
    },
    hidePlaceholder: {
      display: "none",
    },
    placeHolder: {
      color: theme.palette.grey[600],
      position: "relative",
      outline: "none",
    },
    linkPopover: {
      padding: theme.spacing(2, 2, 2, 2),
    },
    linkTextField: {
      width: "100%",
    },
    anchorLink: {},
    toolbar: {},
    inlineToolbar: {
      maxWidth: "180px",
      position: "absolute",
      padding: "5px",
      zIndex: 10,
    },
  }),
  {name: "MUIRichTextEditor"},
);
