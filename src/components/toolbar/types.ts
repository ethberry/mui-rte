import { CSSProperties, FC, MouseEvent, ReactElement } from "react";
import { EditorState } from "draft-js";
import { TAnchor } from "../types";

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
  icon?: React.ReactNode;
  type: TControlType;
  component?: FC<IToolbarComponentProps>;
  inlineStyle?: CSSProperties;
  blockWrapper?: ReactElement;
  atomicComponent?: FC;
  onClick?: (editorState: EditorState, name: string, anchor: TAnchor) => EditorState | void;
};

export type TStyleType = {
  id?: string;
  name: TToolbarControl | string;
  label: string;
  style: string;
  icon?: React.ReactNode;
  component?: FC<IToolbarComponentProps>;
  type: TControlType;
  active?: boolean;
  clickFnName?: string;
};
