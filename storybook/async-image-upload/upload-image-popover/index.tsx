import { FC, useEffect, useState } from "react";
import { Button, Grid, IconButton, Popover, TextField } from "@mui/material";
import { AttachFile, Close, Done } from "@mui/icons-material";

import { TAnchor } from "../../../src";

interface IUploadImagePopoverProps {
  anchor: TAnchor;
  onSubmit: (data: IUploadImageData, insert: boolean) => void;
}

interface IUploadImagePopoverState {
  anchor: TAnchor;
  isCancelled: boolean;
}

interface IUploadImageData {
  file?: File;
}

export const UploadImagePopover: FC<IUploadImagePopoverProps> = props => {
  const { anchor, onSubmit } = props;

  const [state, setState] = useState<IUploadImagePopoverState>({
    anchor: null,
    isCancelled: false,
  });
  const [data, setData] = useState<IUploadImageData>({});

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
      <Grid
        container
        spacing={1}
        style={{
          padding: 10,
          maxWidth: 350,
        }}
      >
        <Grid size={{ xs: 10 }}>
          <TextField
            style={{ width: "100%" }}
            disabled
            value={data.file?.name || ""}
            placeholder="Click icon to attach image"
          />
        </Grid>
        <Grid size={{ xs: 10 }}>
          <input
            accept="image/*"
            style={{ display: "none" }}
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
