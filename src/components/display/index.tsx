import { FC } from "react";
import { Editor, EditorState, convertFromRaw, ContentBlock, CompositeDecorator } from "draft-js";

import { atomicBlockExists } from "../../utils";
import { TCustomControl } from "../toolbar/types";
import { Media } from "../media";
import { Link, findLinkEntities } from "../link";

export interface IRichTextDisplayProps {
  data: any;
  customControls?: Array<TCustomControl>;
}

export const RichTextDisplay: FC<IRichTextDisplayProps> = props => {
  const { data, customControls = [] } = props;

  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link,
    },
  ]);
  const editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(data)), decorator);

  const handleChange = () => {};

  const blockRenderer = (contentBlock: ContentBlock) => {
    const blockType = contentBlock.getType();
    if (blockType === "atomic") {
      const contentState = editorState.getCurrentContent();
      const entity = contentBlock.getEntityAt(0);
      if (entity) {
        const type = contentState.getEntity(entity).getType();
        if (type === "IMAGE") {
          return {
            component: Media,
            editable: false,
            props: contentState.getEntity(contentBlock.getEntityAt(0)).getData(),
          };
        } else {
          const block = atomicBlockExists(type.toLowerCase(), customControls);
          if (block) {
            return {
              component: block.atomicComponent,
              editable: false,
              props: contentState.getEntity(contentBlock.getEntityAt(0)).getData(),
            };
          }
        }
      }
    }
    return null;
  };

  return <Editor blockRendererFn={blockRenderer} editorState={editorState} readOnly={true} onChange={handleChange} />;
};
