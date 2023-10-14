import { FC, PropsWithChildren } from "react";
import { ContentState } from "draft-js";
import { clsx } from "clsx";
import { Link as MuiLink } from "@mui/material";

interface ILinkProps {
  contentState: ContentState;
  entityKey: string;
}

export * from "./utils";

export const Link: FC<PropsWithChildren<ILinkProps>> = props => {
  const { contentState, entityKey, children } = props;

  const { url, className }: { url: string; className: string } = contentState.getEntity(entityKey).getData();

  return (
    <MuiLink href={url} className={clsx(className, "editor-anchor")} target="_blank">
      {children}
    </MuiLink>
  );
};
