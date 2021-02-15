import React, {FC} from "react";
import {ContentState} from "draft-js";
import MuiLink from "@material-ui/core/Link";


type TLinkProps = {
  children?: React.ReactNode;
  contentState: ContentState;
  entityKey: string;
};

const Link: FC<TLinkProps> = props => {
  const {url, className}: {url: string; className: string} = props.contentState.getEntity(props.entityKey).getData();
  return (
    <MuiLink href={url} className={`${className} editor-anchor`} target="_blank">
      {props.children}
    </MuiLink>
  );
};

export default Link;
