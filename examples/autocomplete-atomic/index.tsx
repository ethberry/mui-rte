import React, {FC} from "react";
import {Avatar, Chip} from "@material-ui/core";

import {MUIRichTextEditor} from "../../src";
import {TAutocompleteItem} from "../../src/components/autocomplete";


const save = (data: string) => {
  console.log(data);
};

const cities: TAutocompleteItem[] = [
  {
    keys: ["mexico"],
    value: {
      name: "Mexico City",
      image: "🇲🇽",
    },
    content: "Mexico City",
  },
  {
    keys: ["mexico", "beach"],
    value: {
      name: "Cancun",
      image: "🚩",
    },
    content: "Cancun",
  },
  {
    keys: ["japan", "olympics"],
    value: {
      name: "Tokyo",
      image: "🇯🇵",
    },
    content: "Tokyo",
  },
  {
    keys: ["japan"],
    value: {
      name: "Osaka",
      image: "🏁",
    },
    content: "Osaka",
  },
];

const CityChip: FC<any> = props => {
  const {blockProps} = props;
  const {value} = blockProps; // Get the value provided in the TAutocompleteItem[]

  const handleClick = () => {
    console.log(value.name);
  };

  return <Chip avatar={<Avatar>{value.image}</Avatar>} label={value.name} onClick={handleClick} />;
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
