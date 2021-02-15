import {IAutocompleteItem} from "../../src/components/autocomplete";


export const cities: IAutocompleteItem[] = [
  {
    keys: ["mexico"],
    value: {
      name: "Mexico City",
      image: "🇲🇽",
    },
    content: "Mexico City",
  },
  {
    keys: ["mexico", "beach"],
    value: {
      name: "Cancun",
      image: "🚩",
    },
    content: "Cancun",
  },
  {
    keys: ["japan", "olympics"],
    value: {
      name: "Tokyo",
      image: "🇯🇵",
    },
    content: "Tokyo",
  },
  {
    keys: ["japan"],
    value: {
      name: "Osaka",
      image: "🏁",
    },
    content: "Osaka",
  },
];
