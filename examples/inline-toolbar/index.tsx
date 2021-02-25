import React, {FC} from "react";

import {RichTextEditor} from "../../src";


export const InlineToolbar: FC = () => {
  return <RichTextEditor label="Try selecting some text to show the inline toolbar..." inlineToolbar={true} />;
};
