import { Meta, StoryObj } from "@storybook/react";

import { RichTextEditor } from "../../src";

export default {
  title: "Max Length",
} as Meta<typeof RichTextEditor>;

type Story = StoryObj<typeof RichTextEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return <RichTextEditor label="You can only type 10 characters..." maxLength={10} onSave={save} {...args} />;
  },
};

export const MaxLength = Template;
