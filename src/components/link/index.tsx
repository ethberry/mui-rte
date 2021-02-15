import React, {FC} from "react";
import {ContentState} from "draft-js";
import classnames from "classnames";
import {Link as MuiLink} from "@material-ui/core";


interface ILinkProps {
  contentState: ContentState;
  entityKey: string;
}

export const Link: FC<ILinkProps> = props => {
  const {contentState, children} = props;

  const {url, className}: {url: string; className: string} = contentState.getEntity(props.entityKey).getData();

  return (
    <MuiLink href={url} className={classnames(className, "editor-anchor")} target="_blank">
      {children}
    </MuiLink>
  );
};
