import React, { FC } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

export const MyCard: FC<any> = props => {
  const { blockProps } = props;

  const classes = useStyles();

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
