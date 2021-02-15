import React, {FC} from "react";
import clsx from "clsx";
import {ContentBlock, ContentState} from "draft-js";

import {useStyles} from "./styles";


interface IMediaProps {
  block: ContentBlock;
  contentState: ContentState;
  blockProps: any;
  onClick: (block: ContentBlock) => void;
}

export const Media: FC<IMediaProps> = props => {
  const {contentState, blockProps, block} = props;

  const {url, width, height, alignment, type} = contentState.getEntity(block.getEntityAt(0)).getData();
  const {onClick, readOnly, focusKey} = blockProps;

  const classes = useStyles();

  const htmlTag = () => {
    const componentProps = {
      src: url,
      className: clsx(classes.root, {
        [classes.editable]: !readOnly,
        [classes.focused]: !readOnly && focusKey === block.getKey(),
      }),
      width: width,
      height: type === "video" ? "auto" : height,
      onClick: () => {
        if (readOnly) {
          return;
        }
        onClick(block);
      },
    };

    if (!type || type === "image") {
      return <img {...componentProps} />;
    }
    if (type === "video") {
      return <video {...componentProps} autoPlay={false} controls />;
    }
    return null;
  };

  return (
    <div
      className={clsx({
        [classes.centered]: alignment === "center",
        [classes.leftAligned]: alignment === "left",
        [classes.rightAligned]: alignment === "right",
      })}
    >
      {htmlTag()}
    </div>
  );
};
