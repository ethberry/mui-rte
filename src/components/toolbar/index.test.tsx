import React from "react";
import { cleanup, render } from "@testing-library/react";
import { EditorState } from "draft-js";

import { Toolbar } from "./index";
import { TToolbarControl } from "./types";

afterEach(cleanup);

describe("<EditorControls />", () => {
  let editorState: EditorState;

  beforeAll(() => {
    editorState = EditorState.createEmpty();
  });

  it("should render all controls", async () => {
    const { findAllByTestId } = render(
      <Toolbar id="mui-rte" editorState={editorState} onClick={() => {}} isActive={true} />,
    );
    const result = await findAllByTestId("toolbar-button");
    expect(result).toHaveLength(16);
  });

  it("should render controls in order", async () => {
    const controls: TToolbarControl[] = ["save", "code", "underline"];
    const expected = ["Save", "Code Block", "Underline"];
    const { findAllByTestId } = render(
      <Toolbar id="mui-rte" editorState={editorState} controls={controls} onClick={() => {}} isActive={true} />,
    );
    const result = await findAllByTestId("toolbar-button");

    const labels = result.map(item => item.getAttribute("aria-label"));
    expect(labels).toEqual(expected);
  });

  it("should not render controls", () => {
    const { queryAllByTestId } = render(
      <Toolbar id="mui-rte" editorState={editorState} controls={[]} onClick={() => {}} isActive={true} />,
    );
    const result = queryAllByTestId("toolbar-button");
    expect(result).toHaveLength(0);
  });
});
