import { defineSlotRecipe } from "@pandacss/dev";

export const dataTableRow = defineSlotRecipe({
  className: "dataTableRow",
  description: "Table Row styles based on Figma DS - supports state, isActive, isSelected variants",
  slots: ["row", "rowInner"],
  base: {
    row: {
      display: "table-row",
      background: "white",
      transition: "background-color 0.15s ease",
      position: "relative",
    },
    rowInner: {
      display: "contents",
    },
  },
  variants: {
    // Figma DS Row State
    state: {
      inactive: {
        row: {
          background: "white",
        },
      },
      "row-hover": {
        row: {
          background: "#fafbfc",
        },
      },
      "focus-within": {
        row: {
          background: "#f5f9ff",
        },
      },
    },
    // Is row active (being edited, etc.)
    isActive: {
      true: {
        row: {
          background: "#e8f4ff",
        },
      },
      false: {},
    },
    // Is row selected (checkbox checked)
    isSelected: {
      true: {
        row: {
          background: "#f0f7ff",
        },
      },
      false: {},
    },
    // Size variant
    size: {
      normal: {
        row: {
          minHeight: "40px",
        },
      },
      mini: {
        row: {
          minHeight: "32px",
        },
      },
    },
  },
  compoundVariants: [
    // Selected + Hover
    {
      isSelected: true,
      state: "row-hover",
      css: {
        row: {
          background: "#e5f0ff",
        },
      },
    },
    // Selected + Active
    {
      isSelected: true,
      isActive: true,
      css: {
        row: {
          background: "#dbeaff",
        },
      },
    },
    // Active + Hover (active takes precedence)
    {
      isActive: true,
      state: "row-hover",
      css: {
        row: {
          background: "#e0edff",
        },
      },
    },
    // Active + Focus Within
    {
      isActive: true,
      state: "focus-within",
      css: {
        row: {
          background: "#d6e7ff",
        },
      },
    },
  ],
  defaultVariants: {
    state: "inactive",
    isActive: false,
    isSelected: false,
    size: "normal",
  },
});
