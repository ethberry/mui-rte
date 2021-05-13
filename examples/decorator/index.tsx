import React, {FC} from "react";

import {RichTextEditor} from "../../src";
import {MyHashTagDecorator} from "./hash";
import {MyAtDecorator} from "./at";

const save = (data: string) => {
  console.info(data);
};

export const Decorators: FC = () => {
  return (
    <RichTextEditor
      label="Try writing a #hashtag or a @mention..."
      onSave={save}
      decorators={[
        {
          component: MyHashTagDecorator,
          regex: /#[\w]+/g,
        },
        {
          component: MyAtDecorator,
          regex: /@[\w]+/g,
        },
      ]}
    />
  );
};
