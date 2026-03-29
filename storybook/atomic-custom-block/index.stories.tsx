import { Fragment, useRef, useState } from "react";
import { WebAsset } from "@mui/icons-material";
import { Meta, StoryObj } from "@storybook/react";

import { IMuiDraftJsEditorRef, MuiDraftJsEditor, TAnchor } from "../../src";
import { MyCard } from "./my-card";
import { MyCardPopover } from "./my-card-popover";

export default {
  title: "Atomic Custom Block",
} as Meta<typeof MuiDraftJsEditor>;

type Story = StoryObj<typeof MuiDraftJsEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    const ref = useRef<IMuiDraftJsEditorRef>(null);
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
        <MuiDraftJsEditor
          label="Press the last icon in the toolbar to insert an atomic custom block...."
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
              icon: <WebAsset />,
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
  },
};

export const AtomicCustomBlock = Template;
