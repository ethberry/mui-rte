import { FC, Fragment } from "react";
import { Avatar, ListItemAvatar, ListItemText } from "@mui/material";

type IStaff = {
  job: string;
  name: string;
  backgroundColor: string;
};

export const Staff: FC<IStaff> = props => {
  const { backgroundColor, name, job } = props;
  return (
    <Fragment>
      <ListItemAvatar>
        <Avatar
          style={{
            backgroundColor,
          }}
        >
          {name.substr(0, 1)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={job} />
    </Fragment>
  );
};
