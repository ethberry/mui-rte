import { IAutocompleteItem } from "../../src/components/autocomplete";
import { Staff } from "./staff";

export const emojis: IAutocompleteItem[] = [
  {
    keys: ["face", "grin"],
    value: "😀",
    content: "😀",
  },
  {
    keys: ["face", "beaming"],
    value: "😁",
    content: "😁",
  },
  {
    keys: ["face", "joy"],
    value: "😂",
    content: "😂",
  },
  {
    keys: ["face", "grin", "big"],
    value: "😃",
    content: "😃",
  },
  {
    keys: ["face", "grin", "smile"],
    value: "😄",
    content: "😄",
  },
  {
    keys: ["face", "sweat"],
    value: "😅",
    content: "😅",
  },
];

export const cities: IAutocompleteItem[] = [
  {
    keys: ["mexico"],
    value: "Mexico City",
    content: "Mexico City",
  },
  {
    keys: ["mexico", "beach"],
    value: "Cancun",
    content: "Cancun",
  },
  {
    keys: ["japan", "olympics"],
    value: "Tokyo",
    content: "Tokyo",
  },
  {
    keys: ["japan"],
    value: "Osaka",
    content: "Osaka",
  },
];

export const staff = [
  {
    keys: ["all", "foo", "manager"],
    value: "Foo Bar",
    content: <Staff name="Foo Bar" job="Manager" backgroundColor="tomato" />,
  },
  {
    keys: ["all", "bar", "support"],
    value: "Bar Foo",
    content: <Staff name="Bar Foo" job="Technical Support" backgroundColor="orange" />,
  },
  {
    keys: ["all", "mui", "manager"],
    value: "Mui Rte",
    content: <Staff name="Mui Rte" job="Manager" backgroundColor="dodgerblue" />,
  },
];
