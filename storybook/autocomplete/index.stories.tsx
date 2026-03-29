import { Meta, StoryObj } from "@storybook/react";

import { MuiDraftJsEditor } from "../../src";
import { cities, emojis, staff } from "./data";

export default {
  title: "Autocomplete",
} as Meta<typeof MuiDraftJsEditor>;

type Story = StoryObj<typeof MuiDraftJsEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return (
      <MuiDraftJsEditor
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
