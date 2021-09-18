import { Story } from "@storybook/react";

import { IRichTextEditorProps, RichTextEditor } from "../../src";

export default {
  title: "Inline Toolbar",
};

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => {
  return (
    <RichTextEditor
      label="Try selecting some text to show the inline toolbar..."
      inlineToolbar={true}
      onSave={save}
      {...args}
    />
  );
};

export const InlineToolbar = Template.bind({});
