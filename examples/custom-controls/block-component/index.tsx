import React, {FC} from "react";
import {Button} from "@material-ui/core";

import {IToolbarComponentProps} from "../../../src/components/toolbar";


export const MyBlockComponent: FC<IToolbarComponentProps> = props => {
  const {id, onMouseDown, active, disabled} = props;
  return (
    <Button
      id={id}
      variant="contained"
      onMouseDown={onMouseDown}
      color={active ? "primary" : "default"}
      disabled={disabled}
    >
      My Block
    </Button>
  );
};
