import React from "react";
import {mount} from "enzyme";
import {spy} from "sinon";
import {Editor, convertFromRaw} from "draft-js";
import {RichTextEditor} from "./index";
import {Toolbar} from "../toolbar";
import {ToolbarButton} from "../toolbar-button";


describe("<MUIRichTextEditor />", () => {
  it("should render controls and editor", () => {
    const wrapper = mount(<RichTextEditor />);
    const toolbar = wrapper.find(Toolbar);
    const editor = wrapper.find(Editor);

    expect(toolbar).toHaveLength(1);
    expect(editor).toHaveLength(1);
  });

  it("should load content", () => {
    const expected =
      '{"blocks":[{"key":"4a8q0","text":"bold text and normal","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":9,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}';
    const wrapper = mount(<RichTextEditor defaultValue={expected} />);
    const editor = wrapper.find(Editor);
    expect(editor.prop("editorState").getCurrentContent()).toEqual(convertFromRaw(JSON.parse(expected)));
  });

  it("should call save", () => {
    const saveSpy = spy();
    const component = <RichTextEditor onSave={saveSpy} />;
    const wrapper = mount(component);
    const saveButton = wrapper.find(ToolbarButton).filterWhere((button: any) => {
      return button.prop("label") === "Save";
    });
    expect(saveButton).toHaveLength(1);
    saveButton.first().simulate("mousedown");
    expect(saveSpy.called).toBeTruthy();
  });
});
