import React, { Fragment, useRef, useState } from "react";
import { Story } from "@storybook/react";
import { Update } from "@material-ui/icons";

import { IRichTextEditorProps, IRichTextEditorRef, RichTextEditor, TAnchor } from "../../src";
import { MyCard } from "./my-card";
import { MyCardPopover } from "./my-card-popover";
import { downloadData } from "./utils";

export default {
  title: "Async Atomic Custom Block",
};

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => {
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
        controls={["title", "bold", "underline", "save", "add-card"]}
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
        onSave={save}
        {...args}
      />
    </Fragment>
  );
};

export const AsyncAtomicCustomBlock = Template.bind({});
