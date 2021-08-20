import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme>(
  theme => ({
    root: {
      backgroundColor: theme.palette.grey[200],
      padding: theme.spacing(1, 2, 1, 2),
    },
  }),
  { name: "CodeBlock" },
);
