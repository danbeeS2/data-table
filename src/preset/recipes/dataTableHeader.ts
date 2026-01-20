import { defineSlotRecipe } from "@pandacss/dev";

export const dataTableHeader = defineSlotRecipe({
  className: "dataTableHeader",
  description: "Table Header Cell styles based on Figma DS - supports contentsType, sorting, sticky variants",
  slots: [
    "cell",
    "content",
    "text",
    "sortingIndicator",
    "sortIcon",
    "expandIcon",
    "collapseIcon",
    "checkbox",
    "spacer",
    "tooltipIcon",
  ],
  base: {
    cell: {
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
      background: "white",
      fontFamily: "'Pretendard', sans-serif",
      fontFeatureSettings: "'case', 'ss06', 'ss10'",
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
    content: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      minHeight: "24px",
    },
    text: {
      fontFamily: "'Pretendard', sans-serif",
      fontFeatureSettings: "'case', 'ss06', 'ss10'",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    sortingIndicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "16px",
      height: "16px",
      cursor: "pointer",
      color: "#6b7180",
      transition: "color 0.15s ease, opacity 0.15s ease",
      flexShrink: 0,
      "&:hover": {
        color: "#1e2024",
      },
    },
    sortIcon: {
      width: "14px",
      height: "14px",
      transition: "transform 0.2s ease",
    },
    expandIcon: {
      width: "16px",
      height: "16px",
      color: "#6b7180",
      cursor: "pointer",
      transition: "color 0.15s ease",
      "&:hover": {
        color: "#1e2024",
      },
    },
    collapseIcon: {
      width: "16px",
      height: "16px",
      color: "#6b7180",
      cursor: "pointer",
      transition: "color 0.15s ease",
      "&:hover": {
        color: "#1e2024",
      },
    },
    checkbox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& input": {
        width: "16px",
        height: "16px",
        margin: 0,
        cursor: "pointer",
        accentColor: "#0091ff",
      },
    },
    spacer: {
      width: "100%",
      height: "100%",
    },
    tooltipIcon: {
      width: "14px",
      height: "14px",
      color: "#9ca3af",
      cursor: "help",
      transition: "color 0.15s ease",
      "&:hover": {
        color: "#6b7180",
      },
    },
  },
  variants: {
    // Figma DS Header contentsType
    contentsType: {
      expand: {
        cell: {
          width: "48px",
          padding: "8px 12px",
        },
        content: {
          justifyContent: "center",
        },
      },
      spacer: {
        cell: {
          width: "16px",
          padding: 0,
          "&::after": {
            display: "none",
          },
        },
      },
      check: {
        cell: {
          width: "48px",
          padding: "8px 12px 8px 16px",
        },
        content: {
          justifyContent: "center",
        },
      },
      "text-left": {
        cell: {
          textAlign: "left",
        },
        content: {
          justifyContent: "flex-start",
        },
      },
      "text-right": {
        cell: {
          textAlign: "right",
        },
        content: {
          justifyContent: "flex-end",
        },
      },
      collapse: {
        cell: {
          width: "48px",
          padding: "8px 12px",
        },
        content: {
          justifyContent: "center",
        },
      },
    },
    // Sorting indicator state
    sortingState: {
      ascending: {
        sortIcon: {
          transform: "rotate(180deg)",
        },
        sortingIndicator: {
          opacity: 1,
          color: "#1e2024",
        },
      },
      descending: {
        sortIcon: {
          transform: "rotate(0deg)",
        },
        sortingIndicator: {
          opacity: 1,
          color: "#1e2024",
        },
      },
      inactive: {
        sortingIndicator: {
          opacity: 0.5,
        },
      },
    },
    // Is header sortable
    sortable: {
      true: {
        cell: {
          cursor: "pointer",
          userSelect: "none",
        },
        content: {
          "&:hover": {
            color: "#1e2024",
          },
        },
      },
      false: {},
    },
    // Sticky header
    sticky: {
      true: {
        cell: {
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "white",
        },
      },
      false: {},
    },
    // Size variant
    size: {
      normal: {
        cell: {
          minHeight: "40px",
          padding: "8px 16px",
        },
      },
      mini: {
        cell: {
          minHeight: "32px",
          padding: "6px 12px",
          fontSize: "11px",
        },
      },
    },
    // Resizable
    resizable: {
      true: {
        cell: {
          "&::before": {
            content: '""',
            position: "absolute",
            right: 0,
            top: "4px",
            bottom: "4px",
            width: "4px",
            cursor: "col-resize",
            zIndex: 1,
          },
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    contentsType: "text-left",
    sortingState: "inactive",
    sortable: false,
    sticky: false,
    size: "normal",
    resizable: false,
  },
});
