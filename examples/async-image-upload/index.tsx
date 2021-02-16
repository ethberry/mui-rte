import React, {FC, Fragment, useRef, useState} from "react";
import {Backup} from "@material-ui/icons";

import {RichTextEditor, IRichTextEditorRef} from "../../src/components/editor";
import {TAnchor} from "../../src/components/types";
import {uploadImage} from "./utils";
import {UploadImagePopover} from "./upload-image-popover";


export const AsyncImageUpload: FC = () => {
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
        controls={["title", "bold", "underline", "media", "upload-image"]}
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
      />
    </Fragment>
  );
};
