import { InvertColors } from "@mui/icons-material";
import { Meta, StoryObj } from "@storybook/react";

import { MuiDraftJsEditor } from "../../src";

export default {
  title: "Custom Inline Toolbar",
} as Meta<typeof MuiDraftJsEditor>;

type Story = StoryObj<typeof MuiDraftJsEditor>;

const save = (data: string) => {
  console.info(data);
};

const Template: Story = {
  render: args => {
    return (
      <MuiDraftJsEditor
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
