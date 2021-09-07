import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

import { RichTextEditor } from "./index";

afterEach(cleanup);

const RichTextEditorWithThemeProvider = (props: any) => (
  <ThemeProvider theme={createTheme()}>
    <RichTextEditor {...props} />
  </ThemeProvider>
);

describe("<MUIRichTextEditor />", () => {
  it("should render controls and editor", async () => {
    const { findByTestId } = render(<RichTextEditorWithThemeProvider />);

    const toolbar = await findByTestId("toolbar");
    const editor = await findByTestId("editor");

    expect(toolbar).toBeTruthy();
    expect(editor).toBeTruthy();
  });

  it("should load content", async () => {
    const expected =
      '{"blocks":[{"key":"4a8q0","text":"bold text and normal","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}';
    const wrapper = render(<RichTextEditorWithThemeProvider defaultValue={expected} />);
    const editor = await wrapper.findByTestId("editor");

    expect(editor).toHaveTextContent("bold text and normal");
  });

  it("should call save", async () => {
    const onSave = jest.fn();
    const { findByLabelText } = render(<RichTextEditorWithThemeProvider onSave={onSave} />);
    const saveButton = await findByLabelText("Save");

    expect(saveButton).toBeTruthy();

    fireEvent.mouseDown(saveButton);
    expect(onSave).toHaveBeenCalledTimes(1);
  });
});
