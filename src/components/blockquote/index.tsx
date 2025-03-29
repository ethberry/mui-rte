import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

export const Blockquote: FC<PropsWithChildren> = props => {
  const { children } = props;

  return (
    <Box
      sx={theme => ({
        fontStyle: "italic",
        color: theme.palette.grey[800],
        borderLeft: `4px solid ${theme.palette.grey.A100}`,
      })}
    >
      {children}
    </Box>
  );
};
