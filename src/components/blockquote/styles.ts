import {makeStyles} from "@material-ui/core";


export const useStyles = makeStyles(
  theme => ({
    root: {
      fontStyle: "italic",
      color: theme.palette.grey[800],
      borderLeft: `4px solid ${theme.palette.grey.A100}`,
    },
  }),
  {name: "Blockquote"},
);
