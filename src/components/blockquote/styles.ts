import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme>(
  theme => ({
    root: {
      fontStyle: "italic",
      color: theme.palette.grey[800],
      borderLeft: `4px solid ${theme.palette.grey.A100}`,
    },
  }),
  { name: "Blockquote" },
);
