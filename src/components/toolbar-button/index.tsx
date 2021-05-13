import React, {FC, MouseEvent} from "react";
import {IconButton} from "@material-ui/core";

import {IToolbarComponentProps, TToolbarButtonSize} from "../toolbar/types";

interface IToolbarButtonProps {
  id?: string;
  editorId?: string;
  label: string;
  style: string;
  type: string;
  active?: boolean;
  icon?: JSX.Element;
  onClick?: any;
  inlineMode?: boolean;
  disabled?: boolean;
  size?: TToolbarButtonSize;
  component?: FC<IToolbarComponentProps>;
}

export const ToolbarButton: FC<IToolbarButtonProps> = props => {
  const {
    editorId = "mui-rte",
    inlineMode,
    onClick,
    id,
    label,
    size,
    style,
    type,
    disabled = false,
    icon,
    active,
    component: Component,
  } = props;

  const toolbarId = inlineMode ? "-toolbar" : "";
  const elemId = editorId + "-" + (id || label) + "-button" + toolbarId;

  const mouseDownHandler = (e: MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(style, type, elemId, inlineMode);
    }
  };

  if (icon) {
    return (
      <IconButton
        id={elemId}
        aria-label={label}
        color={active ? "primary" : "default"}
        size={!inlineMode ? size || "medium" : "small"}
        disabled={disabled}
        onMouseDown={mouseDownHandler}
      >
        {icon}
      </IconButton>
    );
  }

  if (Component) {
    return <Component id={elemId} active={active || false} disabled={disabled} onMouseDown={mouseDownHandler} />;
  }

  return null;
};
