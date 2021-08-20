import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

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
