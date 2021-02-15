import React, {FC, useRef, useState} from "react";
import {Update} from "@material-ui/icons";

import {MUIRichTextEditor, TMUIRichTextEditorRef} from "../../src";
import {MyCard} from "./my-card";
import {MyCardPopover} from "./my-card-popover";


const getDataFromCloudService = (searchTerm: string): Promise<any> => {
  return new Promise(resolve => {
    console.log(`Searching for ${searchTerm}...`);
    setTimeout(() => {
      resolve({
        title: "Data from cloud",
        subtitle: `You searched: ${searchTerm}`,
        text: "Some description from the cloud.",
      });
    }, 2000);
  });
};

const downloadData = async (searchTerm: string): Promise<{data: any}> => {
  const data = await getDataFromCloudService(searchTerm);
  if (!data) {
    // for this example this will never be rejected
    throw new Error();
  }
  return {
    data: data,
  };
};

export const AsyncAtomicCustomBlock: FC = () => {
  const ref = useRef<TMUIRichTextEditorRef>(null);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  return (
    <>
      <MyCardPopover
        anchor={anchor}
        onSubmit={(data, insert) => {
          if (insert && data.searchTerm) {
            ref.current?.insertAtomicBlockAsync("my-card", downloadData(data.searchTerm), "Downloading data...");
          }
          setAnchor(null);
        }}
      />
      <MUIRichTextEditor
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
    </>
  );
};
