import { Story } from "@storybook/react";

import { IRichTextEditorProps, RichTextEditor } from "../../src";

export default {
  title: "Max Length",
};

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => {
  return <RichTextEditor label="You can only type 10 characters..." maxLength={10} onSave={save} {...args} />;
};

export const MaxLength = Template.bind({});
