import { FC } from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";

export const MyCard: FC<any> = props => {
  const { blockProps } = props;

  const handleLiked = () => {
    alert("Favorited");
  };

  const handleShared = () => {
    alert("Shared");
  };

  return (
    <Card style={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="name" style={{ backgroundColor: "tomato" }}>
            {blockProps.name?.substring(0, 1)}
          </Avatar>
        }
        title={blockProps.title}
        subheader={blockProps.date?.toLocaleDateString()}
      />
      <CardMedia
        style={{ height: 0, paddingTop: "56.25%" }}
        image={blockProps.image || "default"}
        title={blockProps.title}
      />
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
