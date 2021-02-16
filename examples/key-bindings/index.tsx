import React, {FC} from "react";
import {EditorState, RichUtils} from "draft-js";

import {RichTextEditor} from "../../src/components/editor";


const save = (data: string) => {
  console.log(data);
};

export const KeyBindings: FC = () => {
  return (
    <RichTextEditor
      label="Press CMD + C to clear the editor or CMD + K to add 'italic' style to the selection..."
      onSave={save}
      controls={["title", "italic", "save"]}
      keyCommands={[
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
