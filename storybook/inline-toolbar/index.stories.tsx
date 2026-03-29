import { Meta, StoryObj } from "@storybook/react";

import { MuiDraftJsEditor } from "../../src";

export default {
  title: "Inline Toolbar",
} as Meta<typeof MuiDraftJsEditor>;

type Story = StoryObj<typeof MuiDraftJsEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return (
      <MuiDraftJsEditor
        label="Try selecting some text to show the inline toolbar..."
        inlineToolbar={true}
        onSave={save}
        {...args}
      />
    );
  },
};

export const InlineToolbar = Template;
