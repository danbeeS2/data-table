import { defineConfig } from "@pandacss/dev";
import { dataTable } from "./src/preset/recipes/dataTable";
import { dataTableCell } from "./src/preset/recipes/dataTableCell";
import { dataTableRow } from "./src/preset/recipes/dataTableRow";
import { dataTableHeader } from "./src/preset/recipes/dataTableHeader";
import { pagination } from "./src/preset/recipes/pagination";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      slotRecipes: {
        dataTable,
        dataTableCell,
        dataTableRow,
        dataTableHeader,
        pagination,
      },
    },
  },
  outdir: "styled-system",
  jsxFramework: "react",
});
