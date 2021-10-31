import { FC, useEffect, useState, ChangeEvent } from "react";
import { Button, Grid, Popover, TextField } from "@mui/material";
import { Close, Done } from "@mui/icons-material";

import { TAnchor } from "../../../src";
import { useStyles } from "./styles";

type TMyCardData = {
  searchTerm?: string;
};

interface IMyCardPopoverProps {
  anchor: TAnchor;
  onSubmit: (data: TMyCardData, insert: boolean) => void;
}

interface IMyCardPopoverState {
  anchor: TAnchor;
  isCancelled: boolean;
}

export const MyCardPopover: FC<IMyCardPopoverProps> = props => {
  const { anchor, onSubmit } = props;

  const classes = useStyles();

  const [state, setState] = useState<IMyCardPopoverState>({
    anchor: null,
    isCancelled: false,
  });
  const [data, setData] = useState<TMyCardData>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setState({
      anchor,
      isCancelled: false,
    });
  }, [anchor]);

  return (
    <Popover
      anchorEl={state.anchor}
      open={state.anchor !== null}
      TransitionProps={{
        onExited: () => {
          onSubmit(data, !state.isCancelled);
        },
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Grid container spacing={1} className={classes.root}>
        <Grid item xs={12}>
          <TextField
            className={classes.textField}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            autoFocus={true}
            label="Search term"
            name="searchTerm"
            placeholder="Type anything here..."
          />
        </Grid>
        <Grid item container xs={12} justifyContent="flex-end">
          <Button
            onClick={() => {
              setState({
                anchor: null,
                isCancelled: true,
              });
            }}
          >
            <Close />
          </Button>
          <Button
            onClick={() => {
              setState({
                anchor: null,
                isCancelled: false,
              });
            }}
          >
            <Done />
          </Button>
        </Grid>
      </Grid>
    </Popover>
  );
};
