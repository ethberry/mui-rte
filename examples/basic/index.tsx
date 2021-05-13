import React, {FC} from "react";

import {RichTextEditor} from "../../src";

const save = (data: string) => {
  console.info(data);
};

export const Basic: FC = () => {
  return <RichTextEditor label="Type something here..." onSave={save} />;
};
