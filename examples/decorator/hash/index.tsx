import React, {FC} from "react";

export const MyHashTagDecorator: FC = props => {
  const {children} = props;
  return (
    <span
      style={{
        color: "#3F51B5",
      }}
    >
      {children}
    </span>
  );
};
