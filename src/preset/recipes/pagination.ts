import { defineSlotRecipe } from "@pandacss/dev";

export const pagination = defineSlotRecipe({
  className: "pagination",
  description: "Styles for Pagination component based on Figma design",
  slots: [
    "root",
    "item",
    "icon",
    "footer",
    "footerInfo",
    "selectTrigger",
  ],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "0 6px",
    },
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "36px",
      height: "36px",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: 400,
      color: "#1e2024",
      cursor: "pointer",
      border: "none",
      background: "transparent",
      transition: "background 0.2s",
      _hover: {
        background: "#fafbfc",
      },
      _disabled: {
        opacity: 0.38,
        cursor: "not-allowed",
        _hover: {
          background: "transparent",
        },
      },
    },
    icon: {
      width: "20px",
      height: "20px",
      color: "#6b7180",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      padding: "12px 0",
      width: "100%",
    },
    footerInfo: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "14px",
      color: "#6b7180",
    },
    selectTrigger: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "5px 12px",
      background: "white",
      border: "1px solid #e2e4ea",
      borderRadius: "8px",
      fontSize: "14px",
      color: "#1e2024",
      cursor: "pointer",
      _hover: {
        borderColor: "#c4c8d0",
      },
    },
  },
  variants: {
    active: {
      true: {
        item: {
          background: "#e1f4ec",
          color: "#1c7d55",
          fontWeight: 500,
          _hover: {
            background: "#e1f4ec",
          },
        },
      },
    },
  },
});
