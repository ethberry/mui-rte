import React, {FC} from "react";

import MUIRichTextEditor from "../../";


const save = (data: string) => {
  console.log(data);
};

const MaxLength: FC = () => {
  return <MUIRichTextEditor label="You can only type 10 characters..." maxLength={10} onSave={save} />;
};

export default MaxLength;
