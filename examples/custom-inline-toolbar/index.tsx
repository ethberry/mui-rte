import React, {FC} from "react";
import {InvertColors} from "@material-ui/icons";

import MUIRichTextEditor from "../../";


const save = (data: string) => {
  console.log(data);
};

const CustomInlineToolbar: FC = () => {
  return (
    <MUIRichTextEditor
      label="Try selecting some text to show the inline toolbar..."
      inlineToolbar={true}
      inlineToolbarControls={["bold", "italic", "my-style", "link"]}
      onSave={save}
      customControls={[
        {
          name: "my-style",
          icon: <InvertColors />,
          type: "inline",
          inlineStyle: {
            backgroundColor: "black",
            color: "white",
          },
        },
      ]}
    />
  );
};

export default CustomInlineToolbar;
