import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(
  theme => ({
    linkPopover: {
      padding: theme.spacing(2, 2, 2, 2),
      maxWidth: 250,
    },
    linkTextField: {
      width: "100%",
    },
  }),
  {name: "UrlPopover"},
);
