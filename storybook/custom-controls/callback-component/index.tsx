import React, { FC } from "react";
import { Avatar, Chip } from "@material-ui/core";

import { IToolbarComponentProps } from "../../../src/components/toolbar/types";

export const MyCallbackComponent: FC<IToolbarComponentProps> = props => {
  const { id, onMouseDown, disabled } = props;
  return <Chip id={id} avatar={<Avatar>C</Avatar>} onClick={onMouseDown} label="Callback" disabled={disabled} />;
};
