import React, {FC} from "react";
import {EditorState} from "draft-js";
import {InvertColors} from "@material-ui/icons";

import {RichTextEditor} from "../../src";
import {MyCallbackComponent} from "./callback-component";
import {ClearComponent} from "./clear-component";
import {MyBlockComponent} from "./block-component";
import {MyBlock} from "./block";


const save = (data: string) => {
  console.log(data);
};

export const CustomControls: FC = () => {
  return (
    <RichTextEditor
      label="Type something here..."
      onSave={save}
      controls={["title", "bold", "my-block", "my-style", "clear", "my-callback", "clear-callback", "save"]}
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
        {
          name: "my-block",
          component: MyBlockComponent,
          type: "block",
          blockWrapper: <MyBlock />,
        },
        {
          name: "my-callback",
          component: MyCallbackComponent,
          type: "callback",
          onClick: (_editorState, name, _anchor) => {
            console.log(`Clicked ${name} control`);
          },
        },
        {
          name: "clear-callback",
          component: ClearComponent,
          type: "callback",
          onClick: () => {
            return EditorState.createEmpty();
          },
        },
      ]}
    />
  );
};
