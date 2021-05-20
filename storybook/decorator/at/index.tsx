import React, {FC} from "react";

export const MyAtDecorator: FC<{decoratedText: string}> = props => {
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
