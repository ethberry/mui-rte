import React, {FC} from "react";

import {MUIRichTextEditor} from "../../src";


const save = (data: string) => {
  console.log(data);
};

export const Basic: FC = () => {
  return <MUIRichTextEditor label="Type something here..." onSave={save} />;
};
