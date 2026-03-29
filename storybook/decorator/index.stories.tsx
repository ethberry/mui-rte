import { Meta, StoryObj } from "@storybook/react";

import { MuiDraftJsEditor } from "../../src";
import { MyHashTagDecorator } from "./hash";
import { MyAtDecorator } from "./at";

export default {
  title: "Decorators",
} as Meta<typeof MuiDraftJsEditor>;

type Story = StoryObj<typeof MuiDraftJsEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return (
      <MuiDraftJsEditor
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
