import { defineSlotRecipe } from "@pandacss/dev";

export const dataTableCell = defineSlotRecipe({
  className: "dataTableCell",
  description: "Cell component styles for DataTable based on Figma Cell-base structure",
  slots: [
    "base",
    "bottomLine",
    "rightLine",
    "container",
    "itemWrapper",
    "item",
    "text",
    "number",
    "checkbox",
    "rowNumber",
  ],
  base: {
    base: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minHeight: "40px",
    },
    bottomLine: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "1px",
      background: "rgba(30, 32, 36, 0.06)",
    },
    rightLine: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: "1px",
      width: "1px",
      background: "rgba(30, 32, 36, 0.06)",
      opacity: 0.5,
    },
    container: {
      display: "flex",
      alignItems: "flex-start",
      minHeight: "40px",
      padding: "4px 16px",
    },
    itemWrapper: {
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
      minHeight: "32px",
    },
    item: {
      display: "flex",
      alignItems: "center",
      minHeight: "32px",
      padding: "4px 0",
    },
    text: {
      fontFamily: "'Pretendard', sans-serif",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#1e2024",
      fontFeatureSettings: "'case', 'ss06', 'ss10', 'lnum', 'tnum'",
    },
    number: {
      fontFamily: "'Pretendard', sans-serif",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#1e2024",
      fontFeatureSettings: "'ss10', 'case', 'ss06', 'lnum', 'tnum'",
      textAlign: "right",
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
  },
  variants: {
    variant: {
      basic: {
        container: {
          padding: "4px 16px",
        },
      },
      utility: {
        container: {
          padding: "4px 16px 4px 16px",
          justifyContent: "center",
        },
        itemWrapper: {
          justifyContent: "center",
        },
        item: {
          justifyContent: "center",
        },
      },
    },
    size: {
      normal: {
        base: {
          minHeight: "40px",
        },
        container: {
          minHeight: "40px",
        },
        itemWrapper: {
          minHeight: "32px",
        },
        item: {
          minHeight: "32px",
        },
      },
      mini: {
        base: {
          minHeight: "32px",
        },
        container: {
          minHeight: "32px",
        },
        itemWrapper: {
          minHeight: "24px",
        },
        item: {
          minHeight: "24px",
        },
        text: {
          fontSize: "12px",
          lineHeight: "20px",
        },
        number: {
          fontSize: "12px",
          lineHeight: "20px",
        },
      },
    },
  },
  defaultVariants: {
    variant: "basic",
    size: "normal",
  },
});
