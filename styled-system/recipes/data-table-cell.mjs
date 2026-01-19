import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const dataTableCellDefaultVariants = {
  "variant": "basic",
  "size": "normal"
}
const dataTableCellCompoundVariants = []

const dataTableCellSlotNames = [
  [
    "base",
    "dataTableCell__base"
  ],
  [
    "bottomLine",
    "dataTableCell__bottomLine"
  ],
  [
    "rightLine",
    "dataTableCell__rightLine"
  ],
  [
    "container",
    "dataTableCell__container"
  ],
  [
    "itemWrapper",
    "dataTableCell__itemWrapper"
  ],
  [
    "item",
    "dataTableCell__item"
  ],
  [
    "text",
    "dataTableCell__text"
  ],
  [
    "number",
    "dataTableCell__number"
  ],
  [
    "checkbox",
    "dataTableCell__checkbox"
  ],
  [
    "rowNumber",
    "dataTableCell__rowNumber"
  ]
]
const dataTableCellSlotFns = /* @__PURE__ */ dataTableCellSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dataTableCellDefaultVariants, getSlotCompoundVariant(dataTableCellCompoundVariants, slotName))])

const dataTableCellFn = memo((props = {}) => {
  return Object.fromEntries(dataTableCellSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const dataTableCellVariantKeys = [
  "variant",
  "size"
]
const getVariantProps = (variants) => ({ ...dataTableCellDefaultVariants, ...compact(variants) })

export const dataTableCell = /* @__PURE__ */ Object.assign(dataTableCellFn, {
  __recipe__: false,
  __name__: 'dataTableCell',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: dataTableCellVariantKeys,
  variantMap: {
  "variant": [
    "basic",
    "utility"
  ],
  "size": [
    "normal",
    "mini"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, dataTableCellVariantKeys)
  },
  getVariantProps
})