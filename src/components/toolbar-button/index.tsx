import React, {FC} from "react";
import {IconButton} from "@material-ui/core";

import {TToolbarComponentProps, TToolbarButtonSize} from "../toolbar";


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
  component?: FC<TToolbarComponentProps>;
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

  const mouseDownHandler = (e: React.MouseEvent) => {
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
      >
        {icon}
        disabled={disabled}
        onMouseDown={mouseDownHandler}
      </IconButton>
    );
  }

  if (Component) {
    return <Component id={elemId} active={active || false} disabled={disabled} onMouseDown={mouseDownHandler} />;
  }

  return null;
};
