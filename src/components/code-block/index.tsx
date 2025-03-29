import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

export const CodeBlock: FC<PropsWithChildren> = props => {
  const { children } = props;

  return (
    <Box
      sx={theme => ({
        backgroundColor: theme.palette.grey[200],
        padding: theme.spacing(1, 2, 1, 2),
      })}
    >
      {children}
    </Box>
  );
};
