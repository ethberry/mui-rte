import { FC } from "react";
import { Button } from "@mui/material";

import { IToolbarComponentProps } from "../../../src/components/toolbar/types";

export const MyBlockComponent: FC<IToolbarComponentProps> = props => {
  const { id, onMouseDown, active, disabled } = props;
  return (
    <Button
      id={id}
      variant="contained"
      onMouseDown={onMouseDown}
      color={active ? "primary" : "inherit"}
      disabled={disabled}
    >
      My Block
    </Button>
  );
};
