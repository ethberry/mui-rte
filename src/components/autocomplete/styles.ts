import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles<Theme>(
  () => ({
    container: {
      minWidth: "200px",
      position: "absolute",
      zIndex: 10,
    },
    item: {
      cursor: "pointer",
    },
  }),
  { name: "Autocomplete" },
);
