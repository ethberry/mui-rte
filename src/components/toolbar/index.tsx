import React, { FC, useEffect, useState } from "react";
import { EditorState } from "draft-js";

import { getSelectionInfo } from "../../utils";
import { ToolbarButton } from "../toolbar-button";
import { STYLE_TYPES } from "./style-types";
import { TCustomControl, TStyleType, TToolbarButtonSize, TToolbarControl } from "./types";

export interface IToolbarProps {
  id: string;
  editorState: EditorState;
  controls?: Array<TToolbarControl>;
  customControls?: TCustomControl[];
  onClick: (style: string, type: string, id: string, inlineMode?: boolean) => void;
  inlineMode?: boolean;
  className?: string;
  disabled?: boolean;
  size?: TToolbarButtonSize;
  isActive: boolean;
}

export const Toolbar: FC<IToolbarProps> = props => {
  const { inlineMode, controls, customControls = [], className, onClick, isActive, disabled, size } = props;

  const [availableControls, setAvailableControls] = useState(controls ? [] : STYLE_TYPES);
  const { editorState } = props;
  const id = inlineMode ? "-inline-toolbar" : "-toolbar";

  const curedControls = Array.isArray(controls) ? [...controls, ...customControls] : customControls;

  useEffect(() => {
    if (!controls) {
      return;
    }
    const filteredControls: TStyleType[] = [];
    controls
      .filter((control, index) => controls.indexOf(control) >= index)
      .forEach(name => {
        const style = STYLE_TYPES.find(style => style.name === name);
        if (style) {
          filteredControls.push(style);
        } else if (customControls.length) {
          const customControl = customControls.find(style => style.name === name);
          if (customControl && customControl.type !== "atomic" && (customControl.icon || customControl.component)) {
            filteredControls.push({
              id: customControl.id || customControl.name + "Id",
              name: customControl.name,
              label: customControl.name,
              style: customControl.name.toUpperCase(),
              icon: customControl.icon,
              component: customControl.component,
              type: customControl.type,
              clickFnName: "onCustomClick",
            });
          }
        }
      });
    setAvailableControls(filteredControls);
  }, curedControls);

  return (
    <div id={`${id}${id}`} className={className}>
      {availableControls.map(style => {
        if (inlineMode && style.type !== "inline" && style.name !== "link" && style.name !== "clear") {
          return null;
        }
        let active = false;
        const action = onClick;
        if (!isActive) {
          active = false;
        } else if (style.type === "inline") {
          active = editorState.getCurrentInlineStyle().has(style.style);
        } else if (style.type === "block") {
          const selection = editorState.getSelection();
          const block = editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
          if (block) {
            active = style.style === block.getType();
          }
        } else {
          if (style.style === "IMAGE" || style.style === "LINK") {
            active = style.style === getSelectionInfo(editorState).entityType;
          }
        }

        return (
          <ToolbarButton
            id={style.id}
            editorId={id}
            key={`key-${style.label}`}
            active={active}
            label={style.label}
            onClick={action}
            style={style.style}
            type={style.type}
            icon={style.icon}
            component={style.component}
            inlineMode={inlineMode}
            disabled={disabled}
            size={size}
          />
        );
      })}
    </div>
  );
};
