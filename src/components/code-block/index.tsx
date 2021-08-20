import React, { FC } from "react";

import { useStyles } from "./styles";

export const CodeBlock: FC = props => {
  const { children } = props;

  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};
