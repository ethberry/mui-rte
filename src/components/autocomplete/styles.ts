import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

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
