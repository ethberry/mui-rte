import React, {FC} from "react";
import {List, ListItem, Paper} from "@material-ui/core";

import {useStyles} from "./styles";


export type TAutocompleteItem = {
  keys: string[];
  value: any;
  content: string | JSX.Element;
};

interface IAutocompleteProps {
  items: TAutocompleteItem[];
  top: number;
  left: number;
  selectedIndex: number;
  onClick: (selectedIndex: number) => void;
}

export const Autocomplete: FC<IAutocompleteProps> = props => {
  if (!props.items.length) {
    return null;
  }

  const classes = useStyles();

  return (
    <Paper
      className={classes.container}
      style={{
        top: props.top,
        left: props.left,
      }}
    >
      <List dense={true}>
        {props.items.map((item, index) => (
          <ListItem
            key={index}
            className={classes.item}
            selected={index === props.selectedIndex}
            onClick={() => props.onClick(index)}
          >
            {item.content}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
