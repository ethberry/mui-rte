import React, {FC} from "react";

import {RichTextEditor} from "../../src/components/editor";
import {cities, emojis, staff} from "./data";


const save = (data: string) => {
  console.log(data);
};

export const Autocomplete: FC = () => {
  return (
    <RichTextEditor
      label="Try typing ':grin' or '/mexico'..."
      onSave={save}
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
    />
  );
};
