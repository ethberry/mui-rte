import { FC } from "react";
import { List, ListItem, Paper } from "@mui/material";

import { useStyles } from "./styles";

export type IAutocompleteItem = {
  keys: string[];
  value: any;
  content: string | JSX.Element;
};

interface IAutocompleteProps {
  items: IAutocompleteItem[];
  top: number;
  left: number;
  selectedIndex: number;
  onClick: (selectedIndex: number) => void;
}

export const Autocomplete: FC<IAutocompleteProps> = props => {
  const { items, top, left, selectedIndex, onClick } = props;

  if (!items.length) {
    return null;
  }

  const classes = useStyles();

  return (
    <Paper
      className={classes.container}
      style={{
        top,
        left,
      }}
    >
      <List dense={true}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            className={classes.item}
            selected={index === selectedIndex}
            onClick={() => onClick(index)}
          >
            {item.content}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
