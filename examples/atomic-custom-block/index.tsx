import React, {FC, Fragment, useRef, useState} from "react";
import {WebAsset} from "@material-ui/icons";

import {RichTextEditor, IRichTextEditorRef} from "../../src/components/editor";
import {TAnchor} from "../../src/components/types";
import {MyCard} from "./my-card";
import {MyCardPopover} from "./my-card-popover";


const save = (data: string) => {
  console.log(data);
};

export const AtomicCustomBlock: FC = () => {
  const ref = useRef<IRichTextEditorRef>(null);
  const [anchor, setAnchor] = useState<TAnchor>(null);
  return (
    <Fragment>
      <MyCardPopover
        anchor={anchor}
        onSubmit={(data, insert) => {
          if (insert) {
            ref.current?.insertAtomicBlockSync("my-card", data);
          }
          setAnchor(null);
        }}
      />
      <RichTextEditor
        label="Press the last icon in the toolbar to insert an atomic custom block...."
        ref={ref}
        onSave={save}
        controls={["title", "bold", "underline", "save", "add-card"]}
        customControls={[
          {
            name: "my-card",
            type: "atomic",
            atomicComponent: MyCard,
          },
          {
            name: "add-card",
            icon: <WebAsset />,
            type: "callback",
            onClick: (_editorState, _name, anchor) => {
              setAnchor(anchor);
            },
          },
        ]}
      />
    </Fragment>
  );
};
