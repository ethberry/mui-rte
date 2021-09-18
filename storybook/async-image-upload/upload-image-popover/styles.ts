import { makeStyles } from "@mui/material";

export const useStyles = makeStyles(
  () => ({
    root: {
      padding: 10,
      maxWidth: 350,
    },
    textField: {
      width: "100%",
    },
    input: {
      display: "none",
    },
  }),
  { name: "UploadImagePopover" },
);
