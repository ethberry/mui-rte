import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles<Theme>(
  () => ({
    root: {
      padding: 10,
      maxWidth: 350,
    },
    textField: {
      width: "100%",
    },
  }),
  { name: "MyCardPopover" },
);
