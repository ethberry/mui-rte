import React, {FC} from "react";
import {ContentState} from "draft-js";
import clsx from "clsx";
import {Link as MuiLink} from "@material-ui/core";


interface ILinkProps {
  contentState: ContentState;
  entityKey: string;
}

export const Link: FC<ILinkProps> = props => {
  const {contentState, entityKey, children} = props;

  const {url, className}: {url: string; className: string} = contentState.getEntity(entityKey).getData();

  return (
    <MuiLink href={url} className={clsx(className, "editor-anchor")} target="_blank">
      {children}
    </MuiLink>
  );
};
