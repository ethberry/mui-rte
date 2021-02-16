import React, {Fragment, FC, useRef, useState} from "react";
import {Update} from "@material-ui/icons";

import {RichTextEditor, IRichTextEditorRef} from "../../src/components/editor";
import {TAnchor} from "../../src/components/types";
import {MyCard} from "./my-card";
import {MyCardPopover} from "./my-card-popover";
import {downloadData} from "./utils";


export const AsyncAtomicCustomBlock: FC = () => {
  const ref = useRef<IRichTextEditorRef>(null);
  const [anchor, setAnchor] = useState<TAnchor>(null);
  return (
    <Fragment>
      <MyCardPopover
        anchor={anchor}
        onSubmit={(data, insert) => {
          if (insert && data.searchTerm) {
            ref.current?.insertAtomicBlockAsync("my-card", downloadData(data.searchTerm), "Downloading data...");
          }
          setAnchor(null);
        }}
      />
      <RichTextEditor
        label="Press the last icon in the toolbar to insert an async atomic custom block..."
        ref={ref}
        controls={["title", "bold", "underline", "add-card"]}
        customControls={[
          {
            name: "my-card",
            type: "atomic",
            atomicComponent: MyCard,
          },
          {
            name: "add-card",
            icon: <Update />,
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
