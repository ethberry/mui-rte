import { convertFromHTML, ContentState, convertToRaw } from "draft-js";
import { Story } from "@storybook/react";

import { IRichTextEditorProps, RichTextEditor } from "../../src";

export default {
  title: "Load HTML",
};

const sampleMarkup =
  '<b>Bold text</b>, <i>Italic text</i><br/ ><br />Other text<br /><br /><a href="http://myurl.com">Some link</a>';
const contentHTML = convertFromHTML(sampleMarkup);
const state = ContentState.createFromBlockArray(contentHTML.contentBlocks, contentHTML.entityMap);
const content = JSON.stringify(convertToRaw(state));

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => {
  return <RichTextEditor defaultValue={content} onSave={save} {...args} />;
};

export const LoadHTML = Template.bind({});
