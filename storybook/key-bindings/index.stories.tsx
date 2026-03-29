import { KeyboardEvent } from "react";
import { EditorState, RichUtils } from "draft-js";
import { Meta, StoryObj } from "@storybook/react";

import { MuiDraftJsEditor } from "../../src";

export default {
  title: "Key Bindings",
} as Meta<typeof MuiDraftJsEditor>;

type Story = StoryObj<typeof MuiDraftJsEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return (
      <MuiDraftJsEditor
        label="Press CMD + C to clear the editor or CMD + K to add 'italic' style to the selection..."
        controls={["title", "italic", "numberList", "bulletList", "save"]}
        keyCommands={[
          {
            key: 190, // >
            name: "on-tab",
            callback: (editorState: EditorState) => {
              return RichUtils.onTab({ preventDefault: () => {} } as KeyboardEvent, editorState, 4);
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
        onSave={save}
        {...args}
      />
    );
  },
};

export const KeyBindings = Template;
