import { InvertColors } from "@mui/icons-material";
import { Story } from "@storybook/react";

import { IRichTextEditorProps, RichTextEditor } from "../../src";

export default {
  title: "Custom Inline Toolbar",
};

const save = (data: string) => {
  console.info(data);
};

const Template: Story<IRichTextEditorProps> = args => {
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
};

export const CustomInlineToolbar = Template.bind({});
