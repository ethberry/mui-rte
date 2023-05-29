import { InvertColors } from "@mui/icons-material";
import { Meta, StoryObj } from "@storybook/react";

import { RichTextEditor } from "../../src";

export default {
  title: "Custom Inline Toolbar",
} as Meta<typeof RichTextEditor>;

type Story = StoryObj<typeof RichTextEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return (
      <RichTextEditor
        label="Try selecting some text to show the inline toolbar..."
        inlineToolbar={true}
        inlineToolbarControls={["bold", "italic", "my-style", "link"]}
        customControls={[
          {
            name: "my-style",
            icon: <InvertColors />,
            type: "inline",
            inlineStyle: {
              backgroundColor: "black",
              color: "white",
            },
          },
        ]}
        onSave={save}
        {...args}
      />
    );
  },
};

export const CustomInlineToolbar = Template;
