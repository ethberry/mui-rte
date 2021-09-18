import { Fragment, useRef, useState } from "react";
import { Backup } from "@mui/icons-material";
import { Story } from "@storybook/react";

import { IRichTextEditorProps, IRichTextEditorRef, RichTextEditor, TAnchor } from "../../src";
import { uploadImage } from "./utils";
import { UploadImagePopover } from "./upload-image-popover";

export default {
  title: "Async Image Upload",
};

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => {
  const ref = useRef<IRichTextEditorRef>(null);
  const [anchor, setAnchor] = useState<TAnchor>(null);

  const handleFileUpload = (file: File) => {
    ref.current?.insertAtomicBlockAsync("IMAGE", uploadImage(file), "Uploading now...");
  };

  return (
    <Fragment>
      <UploadImagePopover
        anchor={anchor}
        onSubmit={(data, insert) => {
          if (insert && data.file) {
            handleFileUpload(data.file);
          }
          setAnchor(null);
        }}
      />
      <RichTextEditor
        label="Drop a file inside the editor or press the last icon in the toolbar to simulate uploading an image...."
        ref={ref}
        controls={["title", "bold", "underline", "media", "save", "upload-image"]}
        customControls={[
          {
            name: "upload-image",
            icon: <Backup />,
            type: "callback",
            onClick: (_editorState, _name, anchor) => {
              setAnchor(anchor);
            },
          },
        ]}
        draftEditorProps={{
          handleDroppedFiles: (_selectionState, files) => {
            if (files.length && (files[0] as File).name !== undefined) {
              handleFileUpload(files[0] as File);
              return "handled";
            }
            return "not-handled";
          },
        }}
        onSave={save}
        {...args}
      />
    </Fragment>
  );
};

export const AsyncImageUpload = Template.bind({});
