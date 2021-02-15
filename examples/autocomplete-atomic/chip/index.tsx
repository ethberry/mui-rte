import React, {FC} from "react";
import {Avatar, Chip} from "@material-ui/core";


export const CityChip: FC<any> = props => {
  const {blockProps} = props;
  const {value} = blockProps; // Get the value provided in the TAutocompleteItem[]

  const handleClick = () => {
    console.log(value.name);
  };

  return <Chip avatar={<Avatar>{value.image}</Avatar>} label={value.name} onClick={handleClick} />;
};
