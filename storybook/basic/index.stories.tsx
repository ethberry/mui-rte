import { Story } from "@storybook/react";

import { IRichTextEditorProps, RichTextEditor } from "../../src";

export default {
  title: "Basic",
};

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => (
  <RichTextEditor label="Type something here..." onSave={save} {...args} />
);

export const Basic = Template.bind({});
