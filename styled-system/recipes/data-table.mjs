import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const dataTableDefaultVariants = {
  "size": "md",
  "stickyHeader": false,
  "zebra": false,
  "variant": "plain"
}
const dataTableCompoundVariants = []

const dataTableSlotNames = [
  [
    "root",
    "dataTable__root"
  ],
  [
    "table",
    "dataTable__table"
  ],
  [
    "thead",
    "dataTable__thead"
  ],
  [
    "tbody",
    "dataTable__tbody"
  ],
  [
    "tr",
    "dataTable__tr"
  ],
  [
    "th",
    "dataTable__th"
  ],
  [
    "td",
    "dataTable__td"
  ],
  [
    "empty",
    "dataTable__empty"
  ],
  [
    "selectionCell",
    "dataTable__selectionCell"
  ],
  [
    "selectionHeaderCell",
    "dataTable__selectionHeaderCell"
  ],
  [
    "rowNumber",
    "dataTable__rowNumber"
  ],
  [
    "checkbox",
    "dataTable__checkbox"
  ]
]
const dataTableSlotFns = /* @__PURE__ */ dataTableSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dataTableDefaultVariants, getSlotCompoundVariant(dataTableCompoundVariants, slotName))])

const dataTableFn = memo((props = {}) => {
  return Object.fromEntries(dataTableSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const dataTableVariantKeys = [
  "size",
  "stickyHeader",
  "zebra",
  "variant"
]
const getVariantProps = (variants) => ({ ...dataTableDefaultVariants, ...compact(variants) })

export const dataTable = /* @__PURE__ */ Object.assign(dataTableFn, {
  __recipe__: false,
  __name__: 'dataTable',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: dataTableVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ],
  "stickyHeader": [
    "true",
    "false"
  ],
  "zebra": [
    "true",
    "false"
  ],
  "variant": [
    "plain",
    "card"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, dataTableVariantKeys)
  },
  getVariantProps
})