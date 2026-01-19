import { defineSlotRecipe } from "@pandacss/dev";

export const dataTable = defineSlotRecipe({
  className: "dataTable",
  description: "Styles for TanStack DataTable component",
  slots: ["root", "table", "thead", "tbody", "tr", "th", "td", "empty"],
  base: {
    root: {
      width: "100%",
      overflowX: "auto",
      borderRadius: "12px",
      border: "1px solid",
      borderColor: "gray.200",
      background: "white",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      fontSize: "14px",
    },
    thead: {
      background: "gray.50",
    },
    tbody: {
      "& tr:last-child td": { borderBottom: "none" },
    },
    tr: {
      _hover: { background: "gray.50" },
    },
    th: {
      textAlign: "left",
      fontWeight: 700,
      color: "gray.800",
      borderBottom: "1px solid",
      borderColor: "gray.200",
      whiteSpace: "nowrap",
    },
    td: {
      padding: "12px",
      textAlign: "left",
      color: "gray.700",
      borderBottom: "1px solid",
      borderColor: "gray.100",
      whiteSpace: "nowrap",
    },
    empty: {
      textAlign: "center",
      color: "gray.500",
      height: "96px",
      padding: "12px",
    },
  },
  variants: {
    size: {
      sm: {
        th: { padding: "10px 12px", fontSize: "13px" },
        td: { padding: "10px 12px", fontSize: "13px" },
      },
      md: {
        th: { padding: "12px 14px", fontSize: "14px" },
        td: { padding: "12px 14px", fontSize: "14px" },
      },
      lg: {
        th: { padding: "14px 16px", fontSize: "15px" },
        td: { padding: "14px 16px", fontSize: "15px" },
      },
    },
    stickyHeader: {
      true: {
        thead: { position: "sticky", top: 0, zIndex: 1 },
      },
      false: {},
    },
    zebra: {
      true: {
        tbody: {
          "& tr:nth-of-type(odd)": { background: "gray.50" },
        },
        tr: { _hover: { background: "gray.100" } },
      },
      false: {},
    },
    variant: {
      plain: {},
      card: {
        root: {
          boxShadow: "sm",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    stickyHeader: false,
    zebra: false,
    variant: "plain",
  },
});
