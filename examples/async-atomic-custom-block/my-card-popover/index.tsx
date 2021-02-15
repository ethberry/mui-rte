import React, {FC, useEffect, useState} from "react";
import {Button, Grid, makeStyles, Popover, TextField} from "@material-ui/core";
import {Close, Done} from "@material-ui/icons";


type TMyCardData = {
  searchTerm?: string;
};

type TAnchor = HTMLElement | null;

interface IMyCardPopoverProps {
  anchor: TAnchor;
  onSubmit: (data: TMyCardData, insert: boolean) => void;
}

type TMyCardPopoverState = {
  anchor: TAnchor;
  isCancelled: boolean;
};

const cardPopverStyles = makeStyles({
  root: {
    padding: 10,
    maxWidth: 350,
  },
  textField: {
    width: "100%",
  },
});

export const MyCardPopover: FC<IMyCardPopoverProps> = props => {
  const classes = cardPopverStyles(props);
  const [state, setState] = useState<TMyCardPopoverState>({
    anchor: null,
    isCancelled: false,
  });
  const [data, setData] = useState<TMyCardData>({});

  useEffect(() => {
    setState({
      anchor: props.anchor,
      isCancelled: false,
    });
  }, [props.anchor]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const textFieldProps = {
    className: classes.textField,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true,
    },
  };

  return (
    <Popover
      anchorEl={state.anchor}
      open={state.anchor !== null}
      onExited={() => {
        props.onSubmit(data, !state.isCancelled);
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
            {...textFieldProps}
            autoFocus={true}
            label="Search term"
            name="searchTerm"
            placeholder="Type anything here..."
          />
        </Grid>
        <Grid item container xs={12} justify="flex-end">
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
