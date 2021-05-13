import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(
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
  {name: "Media"},
);
