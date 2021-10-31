import { FC, useEffect, useState } from "react";
import { Button, Grid, IconButton, Popover, TextField } from "@mui/material";
import { AttachFile, Close, Done } from "@mui/icons-material";

import { TAnchor } from "../../../src";
import { useStyles } from "./styles";

interface IUploadImagePopoverProps {
  anchor: TAnchor;
  onSubmit: (data: TUploadImageData, insert: boolean) => void;
}

type TUploadImagePopoverState = {
  anchor: TAnchor;
  isCancelled: boolean;
};

type TUploadImageData = {
  file?: File;
};

export const UploadImagePopover: FC<IUploadImagePopoverProps> = props => {
  const { anchor, onSubmit } = props;

  const classes = useStyles();

  const [state, setState] = useState<TUploadImagePopoverState>({
    anchor: null,
    isCancelled: false,
  });
  const [data, setData] = useState<TUploadImageData>({});

  useEffect(() => {
    setState({
      anchor,
      isCancelled: false,
    });
    setData({
      file: undefined,
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
        <Grid item xs={10}>
          <TextField
            className={classes.textField}
            disabled
            value={data.file?.name || ""}
            placeholder="Click icon to attach image"
          />
        </Grid>
        <Grid item xs={2}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            onChange={event => {
              setData({
                ...data,
                file: event.target.files?.[0],
              });
            }}
          />
          <label htmlFor="contained-button-file">
            <IconButton color="primary" aria-label="upload image" component="span">
              <AttachFile />
            </IconButton>
          </label>
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
