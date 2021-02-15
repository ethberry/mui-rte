import React, {FC} from "react";
import {EditorState} from "draft-js";
import {Avatar, Button, Chip} from "@material-ui/core";
import {InvertColors} from "@material-ui/icons";

import {MUIRichTextEditor} from "../../src";
import {TToolbarComponentProps} from "../../src/components/toolbar";


const save = (data: string) => {
  console.log(data);
};

const MyBlock = (props: any) => {
  return (
    <div
      style={{
        padding: 10,
        backgroundColor: "#ebebeb",
      }}
    >
      My Block says:
      {props.children}
    </div>
  );
};

const MyCallbackComponent: FC<TToolbarComponentProps> = props => {
  return (
    <Chip
      id={props.id}
      avatar={<Avatar>C</Avatar>}
      onClick={props.onMouseDown}
      label="Callback"
      disabled={props.disabled}
    />
  );
};

const ClearComponent: FC<TToolbarComponentProps> = props => {
  return <Chip id={props.id} onClick={props.onMouseDown} label="Clear all" disabled={props.disabled} />;
};

const MyBlockComponent: FC<TToolbarComponentProps> = props => {
  return (
    <Button
      id={props.id}
      variant="contained"
      onMouseDown={props.onMouseDown}
      color={props.active ? "primary" : "default"}
      disabled={props.disabled}
    >
      My Block
    </Button>
  );
};

export const CustomControls: FC = () => {
  return (
    <MUIRichTextEditor
      label="Type something here..."
      onSave={save}
      controls={["title", "bold", "my-block", "my-style", "clear", "my-callback", "clear-callback", "save"]}
      customControls={[
        {
          name: "my-style",
          icon: <InvertColors />,
          type: "inline",
          inlineStyle: {
            backgroundColor: "black",
            color: "white",
          },
        },
        {
          name: "my-block",
          component: MyBlockComponent,
          type: "block",
          blockWrapper: <MyBlock />,
        },
        {
          name: "my-callback",
          component: MyCallbackComponent,
          type: "callback",
          onClick: (_editorState, name, _anchor) => {
            console.log(`Clicked ${name} control`);
          },
        },
        {
          name: "clear-callback",
          component: ClearComponent,
          type: "callback",
          onClick: () => {
            return EditorState.createEmpty();
          },
        },
      ]}
    />
  );
};
