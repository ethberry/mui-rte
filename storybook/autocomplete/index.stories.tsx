import React from "react";
import { Story } from "@storybook/react";

import { IRichTextEditorProps, RichTextEditor } from "../../src";
import { cities, emojis, staff } from "./data";

export default {
  title: "Autocomplete",
};

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => {
  return (
    <RichTextEditor
      label="Try typing ':grin' or '/mexico'..."
      autocomplete={{
        strategies: [
          {
            items: emojis,
            triggerChar: ":",
          },
          {
            items: cities,
            triggerChar: "/",
          },
          {
            items: staff,
            triggerChar: "@",
            insertSpaceAfter: false,
          },
        ],
      }}
      onSave={save}
      {...args}
    />
  );
};

export const Autocomplete = Template.bind({});
