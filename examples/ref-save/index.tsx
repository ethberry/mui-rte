import React, {FC, useRef} from "react";

import {RichTextEditor, IRichTextEditorRef} from "../../src";

export const RefSave: FC = () => {
  const ref = useRef<IRichTextEditorRef>(null);

  const handleClick = () => {
    ref.current?.save();
  };

  const handleFocus = () => {
    ref.current?.focus();
  };

  const handleSave = (data: string) => {
    console.info(data);
  };

  return (
    <div>
      Save editor state from external button:
      <button
        style={{
          marginLeft: 5,
          padding: 5,
        }}
        onClick={handleClick}
      >
        Save
      </button>
      <button
        style={{
          marginLeft: 5,
          padding: 5,
        }}
        onClick={handleFocus}
      >
        Focus
      </button>
      <RichTextEditor
        label="Type something here..."
        onSave={handleSave}
        ref={ref}
        controls={["bold", "italic", "underline", "quote", "clear"]}
      />
    </div>
  );
};
