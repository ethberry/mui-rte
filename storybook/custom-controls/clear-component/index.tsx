import React, { FC } from "react";
import { Chip } from "@material-ui/core";

import { IToolbarComponentProps } from "../../../src/components/toolbar/types";

export const ClearComponent: FC<IToolbarComponentProps> = props => {
  const { id, onMouseDown, disabled } = props;
  return <Chip id={id} onClick={onMouseDown} label="Clear all" disabled={disabled} />;
};
