import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const dataTableDefaultVariants = {}
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
  ]
]
const dataTableSlotFns = /* @__PURE__ */ dataTableSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dataTableDefaultVariants, getSlotCompoundVariant(dataTableCompoundVariants, slotName))])

const dataTableFn = memo((props = {}) => {
  return Object.fromEntries(dataTableSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const dataTableVariantKeys = []
const getVariantProps = (variants) => ({ ...dataTableDefaultVariants, ...compact(variants) })

export const dataTable = /* @__PURE__ */ Object.assign(dataTableFn, {
  __recipe__: false,
  __name__: 'dataTable',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: dataTableVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, dataTableVariantKeys)
  },
  getVariantProps
})