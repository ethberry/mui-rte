import { useRef } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { MuiDraftJsEditor, IMuiDraftJsEditorRef } from "../../src";

export default {
  title: "Ref Save",
} as Meta<typeof MuiDraftJsEditor>;

type Story = StoryObj<typeof MuiDraftJsEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    const ref = useRef<IMuiDraftJsEditorRef>(null);

    const handleClick = () => {
      ref.current?.save();
    };

    const handleFocus = () => {
      ref.current?.focus();
    };

    return (
      <div>
        Save editor state from external button:
        <button
          style={{
            marginLeft: 5,
            padding: 5,
          }}
          onClick={handleClick}
        >
          Save
        </button>
        <button
          style={{
            marginLeft: 5,
            padding: 5,
          }}
          onClick={handleFocus}
        >
          Focus
        </button>
        <MuiDraftJsEditor
          label="Type something here..."
          ref={ref}
          controls={["bold", "italic", "underline", "quote", "clear"]}
          onSave={save}
          {...args}
        />
      </div>
    );
  },
};

export const RefSave = Template;
