import { FC } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Favorite, Share } from "@material-ui/icons";

import { useStyles } from "./styles";

export const MyCard: FC<any> = props => {
  const { blockProps } = props;

  const classes = useStyles(props);

  const handleLiked = () => {
    alert("Favorited");
  };

  const handleShared = () => {
    alert("Shared");
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="name" className={classes.avatar}>
            {blockProps.name && blockProps.name.substring(0, 1)}
          </Avatar>
        }
        title={blockProps.title}
        subheader={blockProps.date && blockProps.date.toLocaleDateString()}
      />
      <CardMedia className={classes.media} image={blockProps.image || "default"} title={blockProps.title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {blockProps.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like card" onClick={handleLiked}>
          <Favorite />
        </IconButton>
        <IconButton aria-label="share" onClick={handleShared}>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};
