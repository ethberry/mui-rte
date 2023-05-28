import { Meta, StoryObj } from "@storybook/react";

import { RichTextEditor } from "../../src";

export default {
  title: "Inline Toolbar",
} as Meta<typeof RichTextEditor>;

type Story = StoryObj<typeof RichTextEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return (
      <RichTextEditor
        label="Try selecting some text to show the inline toolbar..."
        inlineToolbar={true}
        onSave={save}
        {...args}
      />
    );
  },
};

export const InlineToolbar = Template;
