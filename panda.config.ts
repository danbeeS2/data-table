import { defineConfig } from "@pandacss/dev";
import { dataTable } from "./src/preset/recipes/dataTable";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      slotRecipes: {
        dataTable,
      },
    },
  },
  outdir: "styled-system",
  jsxFramework: "react",
});
