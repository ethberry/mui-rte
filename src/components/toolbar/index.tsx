import React, {CSSProperties, FC, MouseEvent, ReactElement, useEffect, useState} from "react";
import {EditorState} from "draft-js";
import {
  Code,
  FormatBold,
  FormatClear,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatUnderlined,
  Highlight,
  InsertLink,
  PhotoLibrary,
  Redo,
  Save,
  StrikethroughS,
  Title,
  Undo,
} from "@material-ui/icons";

import {TAnchor} from "../types";
import {getSelectionInfo} from "../../utils";
import {ToolbarButton} from "../toolbar-button";


export type TToolbarControl =
  | "title"
  | "bold"
  | "italic"
  | "underline"
  | "link"
  | "numberList"
  | "bulletList"
  | "quote"
  | "code"
  | "clear"
  | "save"
  | "media"
  | "strikethrough"
  | "highlight"
  | string;

export type TControlType = "inline" | "block" | "callback" | "atomic";

export type TToolbarButtonSize = "small" | "medium";

export type IToolbarComponentProps = {
  id: string;
  onMouseDown: (e: MouseEvent) => void;
  active: boolean;
  disabled: boolean;
};

export type TCustomControl = {
  id?: string;
  name: string;
  icon?: JSX.Element;
  type: TControlType;
  component?: FC<IToolbarComponentProps>;
  inlineStyle?: CSSProperties;
  blockWrapper?: ReactElement;
  atomicComponent?: FC;
  onClick?: (editorState: EditorState, name: string, anchor: TAnchor) => EditorState | void;
};

type TStyleType = {
  id?: string;
  name: TToolbarControl | string;
  label: string;
  style: string;
  icon?: JSX.Element;
  component?: FC<IToolbarComponentProps>;
  type: TControlType;
  active?: boolean;
  clickFnName?: string;
};

interface IToolbarProps {
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

const STYLE_TYPES: TStyleType[] = [
  {
    label: "H2",
    name: "title",
    style: "header-two",
    icon: <Title />,
    type: "block",
  },
  {
    label: "Bold",
    name: "bold",
    style: "BOLD",
    icon: <FormatBold />,
    type: "inline",
  },
  {
    label: "Italic",
    name: "italic",
    style: "ITALIC",
    icon: <FormatItalic />,
    type: "inline",
  },
  {
    label: "Underline",
    name: "underline",
    style: "UNDERLINE",
    icon: <FormatUnderlined />,
    type: "inline",
  },
  {
    label: "Strikethrough",
    name: "strikethrough",
    style: "STRIKETHROUGH",
    icon: <StrikethroughS />,
    type: "inline",
  },
  {
    label: "Highlight",
    name: "highlight",
    style: "HIGHLIGHT",
    icon: <Highlight />,
    type: "inline",
  },
  {
    label: "Undo",
    name: "undo",
    style: "UNDO",
    icon: <Undo />,
    type: "callback",
  },
  {
    label: "Redo",
    name: "redo",
    style: "REDO",
    icon: <Redo />,
    type: "callback",
  },
  {
    label: "Link",
    name: "link",
    style: "LINK",
    icon: <InsertLink />,
    type: "callback",
    id: "link-control",
  },
  {
    label: "Media",
    name: "media",
    style: "IMAGE",
    icon: <PhotoLibrary />,
    type: "callback",
    id: "media-control",
  },
  {
    label: "UL",
    name: "bulletList",
    style: "unordered-list-item",
    icon: <FormatListBulleted />,
    type: "block",
  },
  {
    label: "OL",
    name: "numberList",
    style: "ordered-list-item",
    icon: <FormatListNumbered />,
    type: "block",
  },
  {
    label: "Blockquote",
    name: "quote",
    style: "blockquote",
    icon: <FormatQuote />,
    type: "block",
  },
  {
    label: "Code Block",
    name: "code",
    style: "code-block",
    icon: <Code />,
    type: "block",
  },
  {
    label: "Clear",
    name: "clear",
    style: "clear",
    icon: <FormatClear />,
    type: "callback",
  },
  {
    label: "Save",
    name: "save",
    style: "save",
    icon: <Save />,
    type: "callback",
  },
];

export const Toolbar: FC<IToolbarProps> = props => {
  const {inlineMode, controls, customControls = [], className, onClick, isActive, disabled, size} = props;

  const [availableControls, setAvailableControls] = useState(controls ? [] : STYLE_TYPES);
  const {editorState} = props;
  const id = inlineMode ? "-inline-toolbar" : "-toolbar";

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
  }, [controls, customControls]);

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
