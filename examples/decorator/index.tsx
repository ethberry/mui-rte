import React, {FC} from "react";
import MUIRichTextEditor from "../../";


const save = (data: string) => {
  console.log(data);
};

const MyHashTagDecorator = (props: any) => {
  return (
    <span
      style={{
        color: "#3F51B5",
      }}
    >
      {props.children}
    </span>
  );
};

const MyAtDecorator: FC<{decoratedText: string}> = props => {
  const {decoratedText, children} = props;
  const customUrl = `http://myulr/mention/${decoratedText}`;
  return (
    <a
      onClick={() => {
        window.location.href = customUrl;
      }}
      style={{
        color: "green",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
};

const Decorators: FC = () => {
  return (
    <MUIRichTextEditor
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

export default Decorators;
