import { Meta, StoryObj } from "@storybook/react";

import { RichTextEditor } from "../../src";
import { cities, emojis, staff } from "./data";

export default {
  title: "Autocomplete",
} as Meta<typeof RichTextEditor>;

type Story = StoryObj<typeof RichTextEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
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
  },
};

export const Autocomplete = Template;
