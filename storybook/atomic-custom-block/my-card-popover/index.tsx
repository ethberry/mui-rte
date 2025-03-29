import { ChangeEvent, FC, useEffect, useState } from "react";

import { Button, Grid, Popover, TextField } from "@mui/material";
import { Close, Done } from "@mui/icons-material";

import { TAnchor } from "../../../src";

interface IMyCardData {
  title?: string;
  name?: string;
  date?: Date;
  text?: string;
  image?: string;
}

interface IMyCardPopoverProps {
  anchor: TAnchor;
  onSubmit: (data: IMyCardData, insert: boolean) => void;
}

interface IMyCardPopoverState {
  anchor: TAnchor;
  isCancelled: boolean;
}

export const MyCardPopover: FC<IMyCardPopoverProps> = props => {
  const { anchor, onSubmit } = props;

  const [state, setState] = useState<IMyCardPopoverState>({
    anchor: null,
    isCancelled: false,
  });
  const [data, setData] = useState<IMyCardData>({});

  useEffect(() => {
    setState({
      anchor: anchor,
      isCancelled: false,
    });
    setData({
      date: new Date(),
    });
  }, [anchor]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const textFieldProps = {
    style: {
      width: "100%",
    },
    onChange: handleChange,
    InputLabelProps: {
      shrink: true,
    },
  };

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
      <Grid
        container
        spacing={1}
        style={{
          padding: 10,
          maxWidth: 350,
        }}
      >
        <Grid size={{ xs: 6 }}>
          <TextField {...textFieldProps} autoFocus={true} label="Title" name="title" />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <TextField {...textFieldProps} label="Name" name="name" />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField {...textFieldProps} label="Text" name="text" />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField {...textFieldProps} label="Image URL" name="image" />
        </Grid>
        <Grid container size={{ xs: 12 }} justifyContent="flex-end">
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
