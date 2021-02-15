import React, {FC} from "react";
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";


const cardStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const MyCard: FC<any> = props => {
  const {blockProps} = props;
  const classes = cardStyles(props);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {blockProps.title}
        </Typography>
        <Typography gutterBottom component="h2">
          {blockProps.subtitle}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {blockProps.text}
        </Typography>
      </CardContent>
    </Card>
  );
};
