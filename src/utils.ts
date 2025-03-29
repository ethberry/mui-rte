import {
  EditorState,
  DraftBlockType,
  ContentBlock,
  ContentState,
  Modifier,
  SelectionState,
  getVisibleSelectionRect,
  DraftStyleMap,
  DraftInlineStyle,
} from "draft-js";
import { ICustomControl } from "./components/toolbar/types";

export interface ISelectionInfo {
  inlineStyle: DraftInlineStyle;
  blockType: DraftBlockType;
  entityType: string;
  linkKey: string;
  block: ContentBlock;
}

/**
 * Get the current selection details
 */
export const getSelectionInfo = (editorState: EditorState): ISelectionInfo => {
  const selection = editorState.getSelection();
  const startOffset = selection.getStartOffset();
  const currentContent = editorState.getCurrentContent();
  const contentBlock = currentContent.getBlockForKey(selection.getStartKey());
  const currentStyle = editorState.getCurrentInlineStyle();
  const linkKey = contentBlock.getEntityAt(startOffset);
  let entityType = "";
  if (linkKey) {
    const linkInstance = currentContent.getEntity(linkKey);
    entityType = linkInstance.getType();
  }
  return {
    inlineStyle: currentStyle,
    blockType: contentBlock.getType(),
    entityType: entityType,
    linkKey: linkKey,
    block: contentBlock,
  };
};

/**
 * Remove a block from the ContentState
 */
export const removeBlockFromMap = (editorState: EditorState, block: ContentBlock): ContentState => {
  const contentState = editorState.getCurrentContent();
  const removeBlockContentState = Modifier.removeRange(
    contentState,
    new SelectionState({
      anchorKey: block.getKey(),
      anchorOffset: 0,
      focusKey: block.getKey(),
      focusOffset: block.getLength(),
    }),
    "backward",
  );
  const blockMap = removeBlockContentState.getBlockMap().delete(block.getKey());
  return removeBlockContentState.merge({
    blockMap,
    selectionAfter: contentState.getSelectionAfter(),
  }) as ContentState;
};

export const atomicBlockExists = (name: string, controls: ICustomControl[]): ICustomControl | undefined => {
  if (!controls.length) {
    return;
  }
  return controls.find(
    control => control.type === "atomic" && control.name === name && control.atomicComponent !== undefined,
  );
};

export const isGreaterThan = (value: number, maxValue?: number): boolean => {
  if (!maxValue) {
    return false;
  }
  return value > maxValue;
};

export const clearInlineStyles = (editorState: EditorState, customStyles?: DraftStyleMap): ContentState => {
  let styles = ["BOLD", "ITALIC", "UNDERLINE"];
  if (customStyles) {
    styles = styles.concat(Object.getOwnPropertyNames(customStyles));
  }
  return styles.reduce(
    (newContentState: ContentState, style: string) =>
      Modifier.removeInlineStyle(newContentState, editorState.getSelection(), style),
    editorState.getCurrentContent(),
  );
};

export const getEditorBounds = (editor: HTMLElement): { selectionRect: any; editorRect: any } => {
  return {
    selectionRect: getVisibleSelectionRect(window),
    editorRect: editor.getBoundingClientRect(),
  };
};

export const getLineNumber = (editorState: EditorState): number => {
  const currentBlockKey = editorState.getSelection().getStartKey();
  return editorState
    .getCurrentContent()
    .getBlockMap()
    .keySeq()
    .findIndex(k => k === currentBlockKey);
};
