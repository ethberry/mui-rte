import { Meta, StoryObj } from "@storybook/react";

import { RichTextDisplay, RichTextEditor, ICustomControl } from "../../src";

export default {
  title: "Display",
} as Meta<typeof RichTextEditor>;

type Story = StoryObj<typeof RichTextEditor>;

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

const customControls: Array<ICustomControl> = [];

const Template: Story = { render: args => <RichTextDisplay {...args} data={data} customControls={customControls} /> };

export const Display = Template;
