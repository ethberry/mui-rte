import { FC, PropsWithChildren } from "react";

import { useStyles } from "./styles";

export const CodeBlock: FC<PropsWithChildren> = props => {
  const { children } = props;

  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};
