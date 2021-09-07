import { useRef } from "react";
import { Story } from "@storybook/react";

import { RichTextEditor, IRichTextEditorRef, IRichTextEditorProps } from "../../src";

export default {
  title: "Ref Save",
};

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => {
  const ref = useRef<IRichTextEditorRef>(null);

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
      <RichTextEditor
        label="Type something here..."
        ref={ref}
        controls={["bold", "italic", "underline", "quote", "clear"]}
        onSave={save}
        {...args}
      />
    </div>
  );
};

export const RefSave = Template.bind({});
