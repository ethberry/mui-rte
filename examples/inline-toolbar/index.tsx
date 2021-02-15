import React, {FC} from "react";

import {MUIRichTextEditor} from "../../src";


export const InlineToolbar: FC = () => {
  return <MUIRichTextEditor label="Try selecting some text to show the inline toolbar..." inlineToolbar={true} />;
};
