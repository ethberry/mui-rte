import React, {FC} from "react";

export const MyBlock: FC = props => {
  const {children} = props;
  return (
    <div
      style={{
        padding: 10,
        backgroundColor: "#ebebeb",
      }}
    >
      My Block says:
      {children}
    </div>
  );
};
