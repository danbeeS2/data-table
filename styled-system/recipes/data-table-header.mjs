import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const dataTableHeaderDefaultVariants = {
  "contentsType": "text-left",
  "sortingState": "inactive",
  "sortable": false,
  "sticky": false,
  "size": "normal",
  "resizable": false
}
const dataTableHeaderCompoundVariants = []

const dataTableHeaderSlotNames = [
  [
    "cell",
    "dataTableHeader__cell"
  ],
  [
    "content",
    "dataTableHeader__content"
  ],
  [
    "text",
    "dataTableHeader__text"
  ],
  [
    "sortingIndicator",
    "dataTableHeader__sortingIndicator"
  ],
  [
    "sortIcon",
    "dataTableHeader__sortIcon"
  ],
  [
    "expandIcon",
    "dataTableHeader__expandIcon"
  ],
  [
    "collapseIcon",
    "dataTableHeader__collapseIcon"
  ],
  [
    "checkbox",
    "dataTableHeader__checkbox"
  ],
  [
    "spacer",
    "dataTableHeader__spacer"
  ],
  [
    "tooltipIcon",
    "dataTableHeader__tooltipIcon"
  ]
]
const dataTableHeaderSlotFns = /* @__PURE__ */ dataTableHeaderSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dataTableHeaderDefaultVariants, getSlotCompoundVariant(dataTableHeaderCompoundVariants, slotName))])

const dataTableHeaderFn = memo((props = {}) => {
  return Object.fromEntries(dataTableHeaderSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const dataTableHeaderVariantKeys = [
  "contentsType",
  "sortingState",
  "sortable",
  "sticky",
  "size",
  "resizable"
]
const getVariantProps = (variants) => ({ ...dataTableHeaderDefaultVariants, ...compact(variants) })

export const dataTableHeader = /* @__PURE__ */ Object.assign(dataTableHeaderFn, {
  __recipe__: false,
  __name__: 'dataTableHeader',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: dataTableHeaderVariantKeys,
  variantMap: {
  "contentsType": [
    "expand",
    "spacer",
    "check",
    "text-left",
    "text-right",
    "collapse"
  ],
  "sortingState": [
    "ascending",
    "descending",
    "inactive"
  ],
  "sortable": [
    "true",
    "false"
  ],
  "sticky": [
    "true",
    "false"
  ],
  "size": [
    "normal",
    "mini"
  ],
  "resizable": [
    "true",
    "false"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, dataTableHeaderVariantKeys)
  },
  getVariantProps
})