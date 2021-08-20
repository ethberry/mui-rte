import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme>(
  theme => ({
    root: {
      margin: "5px 0 1px",
      outline: "none",
    },
    editable: {
      cursor: "pointer",
      "&:hover": {
        boxShadow: theme.shadows[3],
      },
    },
    focused: {
      boxShadow: theme.shadows[3],
    },
    centered: {
      textAlign: "center",
    },
    leftAligned: {
      textAlign: "left",
    },
    rightAligned: {
      textAlign: "right",
    },
  }),
  { name: "Media" },
);
