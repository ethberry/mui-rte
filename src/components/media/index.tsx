import { FC } from "react";
import { type Theme, Box } from "@mui/material";
import { ContentBlock, ContentState } from "draft-js";

interface IMediaProps {
  block: ContentBlock;
  contentState: ContentState;
  blockProps: any;
  onClick: (block: ContentBlock) => void;
}

export const Media: FC<IMediaProps> = props => {
  const { contentState, blockProps, block } = props;

  const { url, width, height, alignment, type } = contentState.getEntity(block.getEntityAt(0)).getData();
  const { onClick, readOnly, focusKey } = blockProps;

  const htmlTag = () => {
    const componentProps = {
      src: url,
      sx: (theme: Theme) => ({
        margin: "5px 0 1px",
        outline: "none",
        cursor: !readOnly ? "pointer" : "auto",
        "&:hover": {
          boxShadow: !readOnly ? theme.shadows[3] : "none",
        },
        boxShadow: !readOnly && focusKey === block.getKey() ? theme.shadows[3] : "none",
      }),
      width,
      height: type === "video" ? "auto" : height,
      onClick: () => {
        if (readOnly) {
          return;
        }
        onClick(block);
      },
    };

    if (!type || type === "image") {
      return <Box component="img" {...componentProps} />;
    }
    if (type === "video") {
      return <Box component="video" {...componentProps} autoPlay={false} controls />;
    }
    return null;
  };

  return (
    <Box
      sx={{
        textAlign: alignment,
      }}
    >
      {htmlTag()}
    </Box>
  );
};
