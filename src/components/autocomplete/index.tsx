import { FC, ReactNode } from "react";
import { List, ListItemButton, Paper } from "@mui/material";

export interface IAutocompleteItem {
  keys: string[];
  value: any;
  content: string | ReactNode;
}

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

  return (
    <Paper
      style={{
        minWidth: "200px",
        position: "absolute",
        zIndex: 10,
        top,
        left,
      }}
    >
      <List dense={true}>
        {items.map((item, index) => (
          <ListItemButton
            key={index}
            style={{
              cursor: "pointer",
            }}
            selected={index === selectedIndex}
            onClick={() => onClick(index)}
          >
            {item.content}
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
};
