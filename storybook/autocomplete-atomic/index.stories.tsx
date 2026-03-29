import { Meta, StoryObj } from "@storybook/react";

import { MuiDraftJsEditor } from "../../src";
import { cities } from "./data";
import { CityChip } from "./chip";

export default {
  title: "Autocomplete Atomic",
} as Meta<typeof MuiDraftJsEditor>;

type Story = StoryObj<typeof MuiDraftJsEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return (
      <MuiDraftJsEditor
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
