import { Meta, StoryObj } from "@storybook/react";

import { RichTextEditor } from "../../src";

export default {
  title: "Basic",
} as Meta<typeof RichTextEditor>;

type Story = StoryObj<typeof RichTextEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = { render: args => <RichTextEditor label="Type something here..." onSave={save} {...args} /> };

export const Basic = Template;
