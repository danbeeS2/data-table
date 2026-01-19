export interface Person {
  id: string;
  name: string;
  age: number;
  gender: "male" | "female";
  country: string;
}

export interface TableRowData {
  id: string;
  title: string;
  breadcrumbs?: string[];
  description?: string;
  text: string;
  textField: string;
  selections: string[];
  typeChip: string;
  createdAt: string;
  author: string;
}

export const personData: Person[] = [
  { id: "1", name: "John Doe", age: 25, gender: "male", country: "United States" },
  { id: "2", name: "Jane Smith", age: 30, gender: "female", country: "Canada" },
  { id: "3", name: "Jim Beam", age: 35, gender: "male", country: "United Kingdom" },
  { id: "4", name: "Jill Johnson", age: 40, gender: "female", country: "Australia" },
  { id: "5", name: "Jack White", age: 45, gender: "male", country: "Germany" },
];

export const tableRowData: TableRowData[] = [
  {
    id: "1",
    title: "Table cell",
    breadcrumbs: ["Home", "Path-1", "Path-2"],
    description: "Description",
    text: "text",
    textField: "textfield",
    selections: ["Chips", "Chips", "Chips", "Chips", "Chips"],
    typeChip: "Chips",
    createdAt: "2026-01-15",
    author: "박",
  },
  {
    id: "2",
    title: "Table cell",
    breadcrumbs: ["Home", "Path-1", "Path-2"],
    description: "Description",
    text: "text",
    textField: "textfield",
    selections: ["Chips", "Chips", "Chips", "Chips", "Chips"],
    typeChip: "Chips",
    createdAt: "2026-01-16",
    author: "박",
  },
  {
    id: "3",
    title: "Table cell",
    breadcrumbs: ["Home", "Path-1", "Path-2"],
    description: "Description",
    text: "text",
    textField: "textfield",
    selections: ["Chips", "Chips", "Chips", "Chips", "Chips"],
    typeChip: "Chips",
    createdAt: "2026-01-17",
    author: "박",
  },
  {
    id: "4",
    title: "Table cell",
    breadcrumbs: ["Home", "Path-1", "Path-2"],
    description: "Description",
    text: "text",
    textField: "textfield",
    selections: ["Chips", "Chips", "Chips", "Chips", "Chips"],
    typeChip: "Chips",
    createdAt: "2026-01-18",
    author: "박",
  },
  {
    id: "5",
    title: "Table cell",
    breadcrumbs: ["Home", "Path-1", "Path-2"],
    description: "Description",
    text: "text",
    textField: "textfield",
    selections: ["Chips", "Chips", "Chips", "Chips", "Chips"],
    typeChip: "Chips",
    createdAt: "2026-01-19",
    author: "박",
  },
];
