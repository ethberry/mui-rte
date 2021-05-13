import React, {FC, KeyboardEvent} from "react";
import {EditorState, RichUtils} from "draft-js";

import {RichTextEditor} from "../../src";

const save = (data: string) => {
  console.info(data);
};

export const KeyBindings: FC = () => {
  return (
    <RichTextEditor
      label="Press CMD + C to clear the editor or CMD + K to add 'italic' style to the selection..."
      onSave={save}
      controls={["title", "italic", "numberList", "bulletList", "save"]}
      keyCommands={[
        {
          key: 190, // >
          name: "on-tab",
          callback: (editorState: EditorState) => {
            return RichUtils.onTab({preventDefault: () => {}} as KeyboardEvent, editorState, 4);
          },
        },
        {
          key: 67, // C
          name: "clear-all",
          callback: _ => {
            return EditorState.createEmpty();
          },
        },
        {
          key: 75, // K
          name: "toggle-italic",
          callback: (editorState: EditorState) => {
            return RichUtils.toggleInlineStyle(editorState, "ITALIC");
          },
        },
      ]}
    />
  );
};
