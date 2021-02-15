import {makeStyles} from "@material-ui/core";


export const useStyles = makeStyles(
  () => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    avatar: {
      backgroundColor: "tomato",
    },
  }),
  {name: "MyCard"},
);
