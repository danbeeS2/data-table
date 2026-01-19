import { defineSlotRecipe } from "@pandacss/dev";

export const dataTable = defineSlotRecipe({
  className: "dataTable",
  description: "Styles for TanStack DataTable component based on Figma design",
  slots: [
    "root",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "empty",
    "selectionCell",
    "selectionHeaderCell",
    "rowNumber",
    "checkbox",
  ],
  base: {
    root: {
      width: "100%",
      overflowX: "auto",
      borderRadius: "12px",
      border: "1px solid",
      borderColor: "rgba(30, 32, 36, 0.06)",
      background: "white",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      fontSize: "14px",
      fontFamily: "'Pretendard', sans-serif",
    },
    thead: {
      background: "white",
    },
    tbody: {
      "& tr:last-child td": {
        borderBottom: "none",
      },
    },
    tr: {
      background: "white",
      transition: "background 0.15s ease",
      _hover: {
        background: "#fafbfc",
      },
    },
    th: {
      textAlign: "left",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "20px",
      color: "#6b7180",
      padding: "8px 16px",
      minHeight: "32px",
      borderBottom: "1px solid rgba(30, 32, 36, 0.06)",
      whiteSpace: "nowrap",
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        right: 0,
        top: "1px",
        bottom: "1px",
        width: "1px",
        background: "rgba(30, 32, 36, 0.06)",
        opacity: 0.5,
      },
      "&:last-child::after": {
        display: "none",
      },
    },
    td: {
      textAlign: "left",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#1e2024",
      padding: "4px 16px",
      minHeight: "40px",
      borderBottom: "1px solid rgba(30, 32, 36, 0.06)",
      whiteSpace: "nowrap",
      position: "relative",
      verticalAlign: "middle",
      "&::after": {
        content: '""',
        position: "absolute",
        right: 0,
        top: "1px",
        bottom: "1px",
        width: "1px",
        background: "rgba(30, 32, 36, 0.06)",
        opacity: 0.5,
      },
      "&:last-child::after": {
        display: "none",
      },
    },
    empty: {
      textAlign: "center",
      color: "#6b7180",
      height: "220px",
      padding: "12px 16px",
      fontSize: "14px",
      verticalAlign: "middle",
    },
    selectionCell: {
      width: "48px",
      minWidth: "48px",
      maxWidth: "48px",
      padding: "4px 12px 4px 16px !important",
      textAlign: "center",
      verticalAlign: "middle",
      position: "relative",
      "&::after": {
        display: "none",
      },
    },
    selectionHeaderCell: {
      width: "48px",
      minWidth: "48px",
      maxWidth: "48px",
      padding: "8px 12px 8px 16px !important",
      textAlign: "center",
      verticalAlign: "middle",
      "&::after": {
        display: "none",
      },
    },
    rowNumber: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
      fontSize: "12px",
      lineHeight: "20px",
      color: "#6b7180",
      fontFamily: "'Pretendard', sans-serif",
      fontFeatureSettings: "'ss10', 'case', 'ss06', 'lnum', 'tnum'",
    },
    checkbox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
      cursor: "pointer",
      "& input": {
        width: "20px",
        height: "20px",
        margin: 0,
        cursor: "pointer",
        accentColor: "#0091ff",
      },
    },
  },
  variants: {
    size: {
      sm: {
        th: { padding: "6px 12px", fontSize: "11px" },
        td: { padding: "4px 12px", fontSize: "13px" },
      },
      md: {
        th: { padding: "8px 16px", fontSize: "12px" },
        td: { padding: "4px 16px", fontSize: "14px" },
      },
      lg: {
        th: { padding: "10px 16px", fontSize: "13px" },
        td: { padding: "8px 16px", fontSize: "15px" },
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
          "& tr:nth-of-type(odd)": { background: "#fafbfc" },
        },
        tr: { _hover: { background: "#f5f6f7" } },
      },
      false: {},
    },
    variant: {
      plain: {},
      card: {
        root: {
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
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
