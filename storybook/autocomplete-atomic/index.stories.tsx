import { Meta, StoryObj } from "@storybook/react";

import { RichTextEditor } from "../../src";
import { cities } from "./data";
import { CityChip } from "./chip";

export default {
  title: "Autocomplete Atomic",
} as Meta<typeof RichTextEditor>;

type Story = StoryObj<typeof RichTextEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return (
      <RichTextEditor
        label="Try typing '/mexico'..."
        customControls={[
          {
            name: "my-city",
            type: "atomic",
            atomicComponent: CityChip,
          },
        ]}
        autocomplete={{
          strategies: [
            {
              items: cities,
              triggerChar: "/",
              atomicBlockName: "my-city",
            },
          ],
        }}
        onSave={save}
        {...args}
      />
    );
  },
};

export const AutocompleteAtomic = Template;
