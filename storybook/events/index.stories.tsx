import { EditorState, convertToRaw } from "draft-js";
import { Meta, StoryObj } from "@storybook/react";

import { RichTextEditor } from "../../src";

export default {
  title: "Events",
} as Meta<typeof RichTextEditor>;

type Story = StoryObj<typeof RichTextEditor>;

const save = (data: string) => {
  console.info(data);
};

const change = (state: EditorState) => {
  // More info about EditorState object at
  // https://draftjs.org/docs/api-reference-editor-state
  //
  // Get current selection
  console.info(state.getSelection());
  // Get current content
  console.info(JSON.stringify(convertToRaw(state.getCurrentContent())));
  // Get current text
  console.info(state.getCurrentContent().getPlainText());
  // Check if editor is empty
  if (!state.getCurrentContent().hasText()) {
    console.info("empty");
  }
};

const focus = () => {
  console.info("Focus on MUIRichTextEditor");
};

const blur = () => {
  console.info("Blur, focus lost on MUIRichTextEditor");
};

const Template: Story = {
  render: args => {
    return (
      <RichTextEditor
        label="Open the console to see the event callback as you type..."
        onChange={change}
        onFocus={focus}
        onBlur={blur}
        onSave={save}
        {...args}
      />
    );
  },
};

export const Events = Template;
