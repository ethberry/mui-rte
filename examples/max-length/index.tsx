import React, {FC} from "react";

import {MUIRichTextEditor} from "../../src";


const save = (data: string) => {
  console.log(data);
};

export const MaxLength: FC = () => {
  return <MUIRichTextEditor label="You can only type 10 characters..." maxLength={10} onSave={save} />;
};
