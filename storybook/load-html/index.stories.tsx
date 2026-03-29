import { convertFromHTML, ContentState, convertToRaw } from "draft-js";
import { Meta, StoryObj } from "@storybook/react";

import { MuiDraftJsEditor } from "../../src";

export default {
  title: "Load HTML",
} as Meta<typeof MuiDraftJsEditor>;

type Story = StoryObj<typeof MuiDraftJsEditor>;

const sampleMarkup =
  '<b>Bold text</b>, <i>Italic text</i><br/ ><br />Other text<br /><br /><a href="http://myurl.com">Some link</a>';
const contentHTML = convertFromHTML(sampleMarkup);
const state = ContentState.createFromBlockArray(contentHTML.contentBlocks, contentHTML.entityMap);
const content = JSON.stringify(convertToRaw(state));

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return <MuiDraftJsEditor defaultValue={content} onSave={save} {...args} />;
  },
};

export const LoadHTML = Template;
