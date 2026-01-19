import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const tableDefaultVariants = {
  "size": "md",
  "stickyHeader": false,
  "zebra": false,
  "variant": "plain"
}
const tableCompoundVariants = []

const tableSlotNames = [
  [
    "root",
    "table__root"
  ],
  [
    "table",
    "table__table"
  ],
  [
    "thead",
    "table__thead"
  ],
  [
    "tbody",
    "table__tbody"
  ],
  [
    "tr",
    "table__tr"
  ],
  [
    "th",
    "table__th"
  ],
  [
    "td",
    "table__td"
  ],
  [
    "empty",
    "table__empty"
  ]
]
const tableSlotFns = /* @__PURE__ */ tableSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tableDefaultVariants, getSlotCompoundVariant(tableCompoundVariants, slotName))])

const tableFn = memo((props = {}) => {
  return Object.fromEntries(tableSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const tableVariantKeys = [
  "size",
  "stickyHeader",
  "zebra",
  "variant"
]
const getVariantProps = (variants) => ({ ...tableDefaultVariants, ...compact(variants) })

export const table = /* @__PURE__ */ Object.assign(tableFn, {
  __recipe__: false,
  __name__: 'table',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: tableVariantKeys,
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
    return splitProps(props, tableVariantKeys)
  },
  getVariantProps
})