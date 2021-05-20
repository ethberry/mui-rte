import React, {FC, Fragment, useState} from "react";
import {Button, ButtonGroup, Grid, Popover, TextField} from "@material-ui/core";
import {
  Check,
  Delete,
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
  InsertPhoto,
  Movie,
} from "@material-ui/icons";

import {useStyles} from "./styles";
import {TAnchor} from "../types";

export type TAlignment = "left" | "center" | "right";

export type TMediaType = "image" | "video";

export type IUrlData = {
  url?: string;
  width?: number;
  height?: number;
  alignment?: TAlignment;
  type?: TMediaType;
};

interface IUrlPopoverStateProps {
  anchor?: TAnchor;
  data?: IUrlData;
  isMedia?: boolean;
  onConfirm: (isMedia?: boolean, ...args: any) => void;
}

export const UrlPopover: FC<IUrlPopoverStateProps> = props => {
  const {data: propData, anchor, isMedia, onConfirm} = props;

  const classes = useStyles();

  const [data, setData] = useState<IUrlData>(
    propData || {
      url: undefined,
      width: undefined,
      height: undefined,
      alignment: undefined,
      type: undefined,
    },
  );

  const onSizeChange = (value: any, prop: "width" | "height") => {
    if (value === "") {
      setData({...data, [prop]: undefined});
      return;
    }
    const intValue = parseInt(value, 10);
    if (isNaN(intValue)) {
      return;
    }
    setData({...data, [prop]: intValue});
  };

  return (
    <Popover
      open={anchor !== undefined}
      anchorEl={anchor}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <div className={classes.linkPopover}>
        <Grid container spacing={1}>
          <Grid container item xs spacing={1}>
            <Grid item xs={12}>
              <TextField
                className={classes.linkTextField}
                onChange={event => setData({...data, url: event.target.value})}
                label="URL"
                defaultValue={data && data.url}
                autoFocus={true}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            {isMedia ? (
              <Fragment>
                <Grid item xs={12}>
                  <ButtonGroup fullWidth>
                    <Button
                      color={!data.type || data.type === "image" ? "primary" : "default"}
                      size="small"
                      onClick={() => setData({...data, type: "image"})}
                    >
                      <InsertPhoto />
                    </Button>
                    <Button
                      color={data.type === "video" ? "primary" : "default"}
                      size="small"
                      onClick={() => setData({...data, type: "video"})}
                    >
                      <Movie />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={event => onSizeChange(event.target.value, "width")}
                    value={data.width || ""}
                    label="Width"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={event => onSizeChange(event.target.value, "height")}
                    value={data.height || ""}
                    label="Height"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonGroup fullWidth>
                    <Button
                      color={data.alignment === "left" ? "primary" : "default"}
                      size="small"
                      onClick={() => setData({...data, alignment: "left"})}
                    >
                      <FormatAlignLeft />
                    </Button>
                    <Button
                      color={data.alignment === "center" ? "primary" : "default"}
                      size="small"
                      onClick={() => setData({...data, alignment: "center"})}
                    >
                      <FormatAlignCenter />
                    </Button>
                    <Button
                      color={data.alignment === "right" ? "primary" : "default"}
                      size="small"
                      onClick={() => setData({...data, alignment: "right"})}
                    >
                      <FormatAlignRight />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Fragment>
            ) : null}
          </Grid>
          <Grid container item xs={12} direction="row" justify="flex-end">
            {data && data.url ? (
              <Button onClick={() => onConfirm(isMedia, "")}>
                <Delete />
              </Button>
            ) : null}
            <Button onClick={() => onConfirm(isMedia, data.url, data.width, data.height, data.alignment, data.type)}>
              <Check />
            </Button>
          </Grid>
        </Grid>
      </div>
    </Popover>
  );
};
