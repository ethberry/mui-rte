import { FC } from "react";
import { Avatar, Chip } from "@mui/material";

export const CityChip: FC<any> = props => {
  const { blockProps } = props;
  const { value } = blockProps; // Get the value provided in the TAutocompleteItem[]

  const handleClick = () => {
    console.info(value.name);
  };

  return <Chip avatar={<Avatar>{value.image}</Avatar>} label={value.name} onClick={handleClick} />;
};
