import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const dataTableRowDefaultVariants = {
  "state": "inactive",
  "isActive": false,
  "isSelected": false,
  "size": "normal"
}
const dataTableRowCompoundVariants = [
  {
    "isSelected": true,
    "state": "row-hover",
    "css": {
      "row": {
        "background": "#e5f0ff"
      }
    }
  },
  {
    "isSelected": true,
    "isActive": true,
    "css": {
      "row": {
        "background": "#dbeaff"
      }
    }
  },
  {
    "isActive": true,
    "state": "row-hover",
    "css": {
      "row": {
        "background": "#e0edff"
      }
    }
  },
  {
    "isActive": true,
    "state": "focus-within",
    "css": {
      "row": {
        "background": "#d6e7ff"
      }
    }
  }
]

const dataTableRowSlotNames = [
  [
    "row",
    "dataTableRow__row"
  ],
  [
    "rowInner",
    "dataTableRow__rowInner"
  ]
]
const dataTableRowSlotFns = /* @__PURE__ */ dataTableRowSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dataTableRowDefaultVariants, getSlotCompoundVariant(dataTableRowCompoundVariants, slotName))])

const dataTableRowFn = memo((props = {}) => {
  return Object.fromEntries(dataTableRowSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const dataTableRowVariantKeys = [
  "state",
  "isActive",
  "isSelected",
  "size"
]
const getVariantProps = (variants) => ({ ...dataTableRowDefaultVariants, ...compact(variants) })

export const dataTableRow = /* @__PURE__ */ Object.assign(dataTableRowFn, {
  __recipe__: false,
  __name__: 'dataTableRow',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: dataTableRowVariantKeys,
  variantMap: {
  "state": [
    "inactive",
    "row-hover",
    "focus-within"
  ],
  "isActive": [
    "true",
    "false"
  ],
  "isSelected": [
    "true",
    "false"
  ],
  "size": [
    "normal",
    "mini"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, dataTableRowVariantKeys)
  },
  getVariantProps
})