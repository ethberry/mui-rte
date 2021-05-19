import React from "react";
import {Story} from "@storybook/react";

import {IRichTextEditorProps, RichTextEditor} from "../../src";
import {MyHashTagDecorator} from "./hash";
import {MyAtDecorator} from "./at";

export default {
  title: "Decorators",
};

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => {
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
};

export const Decorators = Template.bind({});
