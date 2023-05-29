import { Meta, StoryObj } from "@storybook/react";

import { RichTextEditor } from "../../src";
import { MyHashTagDecorator } from "./hash";
import { MyAtDecorator } from "./at";

export default {
  title: "Decorators",
} as Meta<typeof RichTextEditor>;

type Story = StoryObj<typeof RichTextEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return (
      <RichTextEditor
        label="Try writing a #hashtag or a @mention..."
        decorators={[
          {
            component: MyHashTagDecorator,
            regex: /#[\w]+/g,
          },
          {
            component: MyAtDecorator,
            regex: /@[\w]+/g,
          },
        ]}
        onSave={save}
        {...args}
      />
    );
  },
};

export const Decorators = Template;
