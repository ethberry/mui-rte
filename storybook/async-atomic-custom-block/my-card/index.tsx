import { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const MyCard: FC<any> = props => {
  const { blockProps } = props;

  return (
    <Card style={{ maxWidth: "345px" }}>
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
