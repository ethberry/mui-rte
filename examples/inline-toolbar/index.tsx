import React, {FC} from "react";

import MUIRichTextEditor from "../../";


const InlineToolbar: FC = () => {
  return <MUIRichTextEditor label="Try selecting some text to show the inline toolbar..." inlineToolbar={true} />;
};

export default InlineToolbar;
