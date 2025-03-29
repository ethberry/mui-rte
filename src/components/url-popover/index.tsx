import { FC, Fragment, useState } from "react";
import { Box, Button, ButtonGroup, Grid, Popover, TextField } from "@mui/material";
import {
  Check,
  Delete,
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
  InsertPhoto,
  Movie,
} from "@mui/icons-material";

import { TAnchor } from "../types";

export type TAlignment = "left" | "center" | "right";

export type TMediaType = "image" | "video";

export interface IUrlData {
  url?: string;
  width?: number;
  height?: number;
  alignment?: TAlignment;
  type?: TMediaType;
}

interface IUrlPopoverStateProps {
  anchor?: TAnchor;
  data?: IUrlData;
  isMedia?: boolean;
  onConfirm: (isMedia?: boolean, ...args: any) => void;
}

export const UrlPopover: FC<IUrlPopoverStateProps> = props => {
  const { data: propData, anchor, isMedia, onConfirm } = props;

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
      setData({ ...data, [prop]: undefined });
      return;
    }
    const intValue = parseInt(value, 10);
    if (isNaN(intValue)) {
      return;
    }
    setData({ ...data, [prop]: intValue });
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
      <Box
        sx={theme => ({
          padding: theme.spacing(2, 2, 2, 2),
          maxWidth: 250,
        })}
      >
        <Grid container spacing={1}>
          <Grid container size={{ xs: 12 }} spacing={1}>
            <Grid size={{ xs: 12 }}>
              <TextField
                style={{ width: "100%" }}
                onChange={event => setData({ ...data, url: event.target.value })}
                label="URL"
                defaultValue={data?.url}
                autoFocus={true}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </Grid>
            {isMedia ? (
              <Fragment>
                <Grid size={{ xs: 12 }}>
                  <ButtonGroup fullWidth>
                    <Button
                      color={!data.type || data.type === "image" ? "primary" : "inherit"}
                      size="small"
                      onClick={() => setData({ ...data, type: "image" })}
                    >
                      <InsertPhoto />
                    </Button>
                    <Button
                      color={data.type === "video" ? "primary" : "inherit"}
                      size="small"
                      onClick={() => setData({ ...data, type: "video" })}
                    >
                      <Movie />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <TextField
                    onChange={event => onSizeChange(event.target.value, "width")}
                    value={data.width || ""}
                    label="Width"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <TextField
                    onChange={event => onSizeChange(event.target.value, "height")}
                    value={data.height || ""}
                    label="Height"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <ButtonGroup fullWidth>
                    <Button
                      color={data.alignment === "left" ? "primary" : "inherit"}
                      size="small"
                      onClick={() => setData({ ...data, alignment: "left" })}
                    >
                      <FormatAlignLeft />
                    </Button>
                    <Button
                      color={data.alignment === "center" ? "primary" : "inherit"}
                      size="small"
                      onClick={() => setData({ ...data, alignment: "center" })}
                    >
                      <FormatAlignCenter />
                    </Button>
                    <Button
                      color={data.alignment === "right" ? "primary" : "inherit"}
                      size="small"
                      onClick={() => setData({ ...data, alignment: "right" })}
                    >
                      <FormatAlignRight />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Fragment>
            ) : null}
          </Grid>
          <Grid container size={{ xs: 12 }} direction="row" justifyContent="flex-end">
            {data?.url ? (
              <Button onClick={() => onConfirm(isMedia, "")}>
                <Delete />
              </Button>
            ) : null}
            <Button onClick={() => onConfirm(isMedia, data.url, data.width, data.height, data.alignment, data.type)}>
              <Check />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Popover>
  );
};
