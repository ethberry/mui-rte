import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles<Theme>(
  theme => ({
    linkPopover: {
      padding: theme.spacing(2, 2, 2, 2),
      maxWidth: 250,
    },
    linkTextField: {
      width: "100%",
    },
  }),
  { name: "UrlPopover" },
);
