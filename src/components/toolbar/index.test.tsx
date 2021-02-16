import React from "react";
import {mount} from "enzyme";
import {EditorState} from "draft-js";

import {Toolbar} from "./index";
import {TToolbarControl} from "./types";
import {ToolbarButton} from "../toolbar-button";


describe("<EditorControls />", () => {
  let editorState: EditorState;

  beforeAll(() => {
    editorState = EditorState.createEmpty();
  });

  it("should render all controls", () => {
    const wrapper = mount(<Toolbar id="mui-rte" editorState={editorState} onClick={() => {}} isActive={true} />);
    const result = wrapper.find(ToolbarButton);
    expect(result).toHaveLength(16);
  });

  it("should render controls in order", () => {
    const controls: TToolbarControl[] = ["save", "code", "underline"];
    const expected = ["Save", "Code Block", "Underline"];
    const wrapper = mount(
      <Toolbar id="mui-rte" editorState={editorState} controls={controls} onClick={() => {}} isActive={true} />,
    );
    const result = wrapper.find(ToolbarButton).map(item => {
      return item.prop("label");
    });
    expect(result).toEqual(expected);
  });

  it("should not render controls", () => {
    const wrapper = mount(
      <Toolbar id="mui-rte" editorState={editorState} controls={[]} onClick={() => {}} isActive={true} />,
    );
    const result = wrapper.find(ToolbarButton);
    expect(result).toHaveLength(0);
  });
});
