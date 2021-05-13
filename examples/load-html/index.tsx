import React, {FC} from "react";
import {convertFromHTML, ContentState, convertToRaw} from "draft-js";

import {RichTextEditor} from "../../src";

const sampleMarkup =
  '<b>Bold text</b>, <i>Italic text</i><br/ ><br />Other text<br /><br /><a href="http://myurl.com">Some link</a>';
const contentHTML = convertFromHTML(sampleMarkup);
const state = ContentState.createFromBlockArray(contentHTML.contentBlocks, contentHTML.entityMap);
const content = JSON.stringify(convertToRaw(state));

const save = (data: string) => {
  console.info(data);
};

export const LoadHTML: FC = () => {
  return <RichTextEditor defaultValue={content} onSave={save} />;
};
