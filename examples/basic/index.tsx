import React, {FC} from "react";

import {RichTextEditor} from "../../src";


const save = (data: string) => {
  console.log(data);
};

export const Basic: FC = () => {
  return <RichTextEditor label="Type something here..." onSave={save} />;
};
