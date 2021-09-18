import { Story } from "@storybook/react";

import { IRichTextEditorProps, RichTextEditor } from "../../src";
import { cities } from "./data";
import { CityChip } from "./chip";

export default {
  title: "Autocomplete Atomic",
};

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => {
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
};

export const AutocompleteAtomic = Template.bind({});
