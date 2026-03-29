import { Meta, StoryObj } from "@storybook/react";

import { MuiDraftJsEditor } from "../../src";

export default {
  title: "Max Length",
} as Meta<typeof MuiDraftJsEditor>;

type Story = StoryObj<typeof MuiDraftJsEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return <MuiDraftJsEditor label="You can only type 10 characters..." maxLength={10} onSave={save} {...args} />;
  },
};

export const MaxLength = Template;
