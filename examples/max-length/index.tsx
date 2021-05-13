import React, {FC} from "react";

import {RichTextEditor} from "../../src";

const save = (data: string) => {
  console.info(data);
};

export const MaxLength: FC = () => {
  return <RichTextEditor label="You can only type 10 characters..." maxLength={10} onSave={save} />;
};
