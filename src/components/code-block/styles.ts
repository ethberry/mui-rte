import {makeStyles} from "@material-ui/core";


export const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.grey[200],
      padding: theme.spacing(1, 2, 1, 2),
    },
  }),
  {name: "CodeBlock"},
);
