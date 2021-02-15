import {makeStyles} from "@material-ui/core";


export const useStyles = makeStyles(
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
  {name: "Autocomplete"},
);
