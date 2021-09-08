import { Story } from "@storybook/react";

import { IRichTextDisplayProps, RichTextDisplay, TCustomControl } from "../../src";

export default {
  title: "Display",
};

const data = JSON.stringify({
  blocks: [
    {
      key: "4a8q0",
      text: "bold text and normal",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [{ offset: 0, length: 9, style: "BOLD" }],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
});

const customControls: Array<TCustomControl> = [];

const Template: Story<IRichTextDisplayProps> = args => (
  <RichTextDisplay {...args} data={data} customControls={customControls} />
);

export const Display = Template.bind({});
