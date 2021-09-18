import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles<Theme>(
  theme => ({
    root: {
      backgroundColor: theme.palette.grey[200],
      padding: theme.spacing(1, 2, 1, 2),
    },
  }),
  { name: "CodeBlock" },
);
