import { defineSlotRecipe } from "@pandacss/dev";

export const dataTableCell = defineSlotRecipe({
  className: "dataTableCell",
  description:
    "Cell component styles for DataTable based on Figma Cell-base structure - supports all 12 cell types",
  slots: [
    // Structure slots
    "base",
    "bottomLine",
    "rightLine",
    "container",
    "itemWrapper",
    "item",
    // Content slots - Basic
    "text",
    "number",
    "checkbox",
    "rowNumber",
    // Content slots - Template
    "textTemplate",
    "textBreadcrumbs",
    "textDescription",
    // Content slots - Input
    "textField",
    "autoComplete",
    "autoCompleteDropdown",
    "autoCompleteOption",
    // Content slots - Avatar
    "avatar",
    "avatarImage",
    "avatarFallback",
    "avatarName",
    // Content slots - Chip
    "chip",
    "chipLabel",
    "chipRemove",
    // Content slots - Controller
    "controller",
    "controllerButton",
    // Content slots - Drag Handle
    "dragHandle",
    "dragHandleIcon",
    // Content slots - Collapse/Expand
    "collapseExpand",
    "collapseExpandIcon",
  ],
  base: {
    // Structure
    base: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minHeight: "40px",
      transition: "background-color 0.15s ease",
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
      flex: 1,
    },
    item: {
      display: "flex",
      alignItems: "center",
      minHeight: "32px",
      padding: "4px 0",
    },

    // Basic content
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
      fontVariantNumeric: "tabular-nums",
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

    // Template content
    textTemplate: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
    },
    textBreadcrumbs: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      fontSize: "12px",
      lineHeight: "20px",
      color: "#6b7180",
      "& span": {
        "&::after": {
          content: '"/"',
          marginLeft: "4px",
          color: "#d1d5db",
        },
        "&:last-child::after": {
          display: "none",
        },
      },
    },
    textDescription: {
      fontSize: "12px",
      lineHeight: "20px",
      color: "#6b7180",
    },

    // Input content - 피그마: 기본은 텍스트처럼 보이고, 포커스 시 입력 스타일
    textField: {
      width: "100%",
      padding: "4px 0",
      fontSize: "14px",
      lineHeight: "24px",
      border: "none",
      borderRadius: "0",
      background: "transparent",
      color: "#1e2024",
      outline: "none",
      transition: "all 0.15s ease",
      fontFamily: "'Pretendard', sans-serif",
      fontFeatureSettings: "'case', 'ss06', 'ss10', 'lnum', 'tnum'",
      "&:hover": {
        background: "rgba(0, 0, 0, 0.02)",
      },
      "&:focus": {
        background: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        boxShadow: "0 0 0 1px #0091ff",
      },
      "&:disabled": {
        background: "transparent",
        cursor: "not-allowed",
        color: "#9ca3af",
      },
      "&::placeholder": {
        color: "#9ca3af",
      },
    },
    autoComplete: {
      position: "relative",
      width: "100%",
    },
    autoCompleteDropdown: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      marginTop: "4px",
      background: "white",
      border: "1px solid #e2e4ea",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      maxHeight: "200px",
      overflowY: "auto",
      zIndex: 100,
    },
    autoCompleteOption: {
      padding: "8px 12px",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#1e2024",
      cursor: "pointer",
      transition: "background-color 0.15s ease",
      "&:hover": {
        background: "#f5f6f7",
      },
      "&[data-selected='true']": {
        background: "#e8f4ff",
        color: "#0066cc",
      },
    },

    // Avatar content
    avatar: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    avatarImage: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      objectFit: "cover",
      background: "#e2e4ea",
      flexShrink: 0,
    },
    avatarFallback: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#e2e4ea",
      fontSize: "12px",
      fontWeight: 500,
      color: "#6b7180",
      flexShrink: 0,
    },
    avatarName: {
      fontSize: "14px",
      lineHeight: "24px",
      color: "#1e2024",
      fontFamily: "'Pretendard', sans-serif",
    },

    // Chip content
    chip: {
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      padding: "4px 12px",
      borderRadius: "16px",
      fontSize: "13px",
      lineHeight: "20px",
      fontFamily: "'Pretendard', sans-serif",
      transition: "background-color 0.15s ease",
    },
    chipLabel: {
      whiteSpace: "nowrap",
    },
    chipRemove: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "16px",
      height: "16px",
      cursor: "pointer",
      borderRadius: "50%",
      transition: "background-color 0.15s ease",
      marginLeft: "2px",
      "&:hover": {
        background: "rgba(0, 0, 0, 0.1)",
      },
    },

    // Controller content
    controller: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    controllerButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "28px",
      height: "28px",
      borderRadius: "6px",
      cursor: "pointer",
      color: "#6b7180",
      transition: "all 0.15s ease",
      "&:hover": {
        background: "#f0f1f3",
        color: "#1e2024",
      },
      "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.38,
      },
    },

    // Drag Handle content
    dragHandle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
      cursor: "grab",
      color: "#6b7180",
      transition: "color 0.15s ease",
      "&:hover": {
        color: "#1e2024",
      },
      "&:active": {
        cursor: "grabbing",
      },
      "&[data-disabled='true']": {
        cursor: "not-allowed",
        opacity: 0.38,
      },
    },
    dragHandleIcon: {
      width: "16px",
      height: "16px",
    },

    // Collapse/Expand content
    collapseExpand: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
      cursor: "pointer",
      color: "#6b7180",
      borderRadius: "4px",
      transition: "all 0.15s ease",
      "&:hover": {
        background: "#f0f1f3",
        color: "#1e2024",
      },
      "&[data-disabled='true']": {
        cursor: "not-allowed",
        opacity: 0.38,
      },
    },
    collapseExpandIcon: {
      width: "16px",
      height: "16px",
      transition: "transform 0.2s ease",
    },
  },
  variants: {
    // Figma DS Size variant
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
        avatarImage: {
          width: "32px",
          height: "32px",
        },
        avatarFallback: {
          width: "32px",
          height: "32px",
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
        avatarImage: {
          width: "24px",
          height: "24px",
        },
        avatarFallback: {
          width: "24px",
          height: "24px",
          fontSize: "10px",
        },
        avatarName: {
          fontSize: "12px",
          lineHeight: "20px",
        },
        chip: {
          padding: "2px 8px",
          fontSize: "12px",
          lineHeight: "18px",
        },
        textField: {
          padding: "4px 10px",
          fontSize: "12px",
          lineHeight: "20px",
        },
      },
    },
    // Figma DS State variant
    state: {
      inactive: {},
      hover: {
        base: {
          background: "#fafbfc",
        },
      },
      focus: {
        base: {
          outline: "2px solid #0091ff",
          outlineOffset: "-2px",
        },
      },
      "focus-active": {
        base: {
          background: "#e8f4ff",
          outline: "2px solid #0091ff",
          outlineOffset: "-2px",
        },
      },
    },
    // Cell variant (layout)
    variant: {
      basic: {
        container: {
          padding: "4px 16px",
        },
      },
      utility: {
        container: {
          padding: "4px 16px",
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
    // Alignment
    align: {
      left: {
        item: {
          justifyContent: "flex-start",
        },
        text: {
          textAlign: "left",
        },
      },
      center: {
        item: {
          justifyContent: "center",
        },
        text: {
          textAlign: "center",
        },
      },
      right: {
        item: {
          justifyContent: "flex-end",
        },
        text: {
          textAlign: "right",
        },
      },
    },
    // Chip variants
    chipVariant: {
      default: {
        chip: {
          background: "#f0f1f3",
          color: "#1e2024",
        },
      },
      primary: {
        chip: {
          background: "#e8f4ff",
          color: "#0066cc",
        },
      },
      secondary: {
        chip: {
          background: "#f3f0ff",
          color: "#6b4fcc",
        },
      },
      success: {
        chip: {
          background: "#e1f4ec",
          color: "#1c7d55",
        },
      },
      warning: {
        chip: {
          background: "#fff3e0",
          color: "#c77700",
        },
      },
      error: {
        chip: {
          background: "#ffebee",
          color: "#d32f2f",
        },
      },
    },
    // Expanded state for collapse/expand
    expanded: {
      true: {
        collapseExpandIcon: {
          transform: "rotate(90deg)",
        },
      },
      false: {
        collapseExpandIcon: {
          transform: "rotate(0deg)",
        },
      },
    },
  },
  defaultVariants: {
    size: "normal",
    state: "inactive",
    variant: "basic",
    align: "left",
    chipVariant: "default",
    expanded: false,
  },
});
