import React, {FC} from "react";

import {MUIRichTextEditor} from "../../src";
import {cities} from "./data";
import {CityChip} from "./chip";


const save = (data: string) => {
  console.log(data);
};

export const AutocompleteAtomic: FC = () => {
  return (
    <MUIRichTextEditor
      label="Try typing '/mexico'..."
      onSave={save}
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
    />
  );
};
