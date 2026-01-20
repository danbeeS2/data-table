import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const dataTableCellDefaultVariants = {
  "size": "normal",
  "state": "inactive",
  "variant": "basic",
  "align": "left",
  "chipVariant": "default",
  "expanded": false
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
  ],
  [
    "textTemplate",
    "dataTableCell__textTemplate"
  ],
  [
    "textBreadcrumbs",
    "dataTableCell__textBreadcrumbs"
  ],
  [
    "textDescription",
    "dataTableCell__textDescription"
  ],
  [
    "textField",
    "dataTableCell__textField"
  ],
  [
    "autoComplete",
    "dataTableCell__autoComplete"
  ],
  [
    "autoCompleteDropdown",
    "dataTableCell__autoCompleteDropdown"
  ],
  [
    "autoCompleteOption",
    "dataTableCell__autoCompleteOption"
  ],
  [
    "avatar",
    "dataTableCell__avatar"
  ],
  [
    "avatarImage",
    "dataTableCell__avatarImage"
  ],
  [
    "avatarFallback",
    "dataTableCell__avatarFallback"
  ],
  [
    "avatarName",
    "dataTableCell__avatarName"
  ],
  [
    "chip",
    "dataTableCell__chip"
  ],
  [
    "chipLabel",
    "dataTableCell__chipLabel"
  ],
  [
    "chipRemove",
    "dataTableCell__chipRemove"
  ],
  [
    "controller",
    "dataTableCell__controller"
  ],
  [
    "controllerButton",
    "dataTableCell__controllerButton"
  ],
  [
    "dragHandle",
    "dataTableCell__dragHandle"
  ],
  [
    "dragHandleIcon",
    "dataTableCell__dragHandleIcon"
  ],
  [
    "collapseExpand",
    "dataTableCell__collapseExpand"
  ],
  [
    "collapseExpandIcon",
    "dataTableCell__collapseExpandIcon"
  ]
]
const dataTableCellSlotFns = /* @__PURE__ */ dataTableCellSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dataTableCellDefaultVariants, getSlotCompoundVariant(dataTableCellCompoundVariants, slotName))])

const dataTableCellFn = memo((props = {}) => {
  return Object.fromEntries(dataTableCellSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const dataTableCellVariantKeys = [
  "size",
  "state",
  "variant",
  "align",
  "chipVariant",
  "expanded"
]
const getVariantProps = (variants) => ({ ...dataTableCellDefaultVariants, ...compact(variants) })

export const dataTableCell = /* @__PURE__ */ Object.assign(dataTableCellFn, {
  __recipe__: false,
  __name__: 'dataTableCell',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: dataTableCellVariantKeys,
  variantMap: {
  "size": [
    "normal",
    "mini"
  ],
  "state": [
    "inactive",
    "hover",
    "focus",
    "focus-active"
  ],
  "variant": [
    "basic",
    "utility"
  ],
  "align": [
    "left",
    "center",
    "right"
  ],
  "chipVariant": [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "error"
  ],
  "expanded": [
    "true",
    "false"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, dataTableCellVariantKeys)
  },
  getVariantProps
})