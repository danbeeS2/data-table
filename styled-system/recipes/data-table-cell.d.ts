/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface DataTableCellVariant {
  /**
 * @default "normal"
 */
size: "normal" | "mini"
/**
 * @default "inactive"
 */
state: "inactive" | "hover" | "focus" | "focus-active"
/**
 * @default "basic"
 */
variant: "basic" | "utility"
/**
 * @default "left"
 */
align: "left" | "center" | "right"
/**
 * @default "default"
 */
chipVariant: "default" | "primary" | "secondary" | "success" | "warning" | "error"
/**
 * @default false
 */
expanded: boolean
}

type DataTableCellVariantMap = {
  [key in keyof DataTableCellVariant]: Array<DataTableCellVariant[key]>
}

type DataTableCellSlot = "base" | "bottomLine" | "rightLine" | "container" | "itemWrapper" | "item" | "text" | "number" | "checkbox" | "rowNumber" | "textTemplate" | "textBreadcrumbs" | "textDescription" | "textField" | "autoComplete" | "autoCompleteDropdown" | "autoCompleteOption" | "avatar" | "avatarImage" | "avatarFallback" | "avatarName" | "chip" | "chipLabel" | "chipRemove" | "controller" | "controllerButton" | "dragHandle" | "dragHandleIcon" | "collapseExpand" | "collapseExpandIcon"

export type DataTableCellVariantProps = {
  [key in keyof DataTableCellVariant]?: ConditionalValue<DataTableCellVariant[key]> | undefined
}

export interface DataTableCellRecipe {
  __slot: DataTableCellSlot
  __type: DataTableCellVariantProps
  (props?: DataTableCellVariantProps): Pretty<Record<DataTableCellSlot, string>>
  raw: (props?: DataTableCellVariantProps) => DataTableCellVariantProps
  variantMap: DataTableCellVariantMap
  variantKeys: Array<keyof DataTableCellVariant>
  splitVariantProps<Props extends DataTableCellVariantProps>(props: Props): [DataTableCellVariantProps, Pretty<DistributiveOmit<Props, keyof DataTableCellVariantProps>>]
  getVariantProps: (props?: DataTableCellVariantProps) => DataTableCellVariantProps
}

/**
 * Cell component styles for DataTable based on Figma Cell-base structure - supports all 12 cell types
 */
export declare const dataTableCell: DataTableCellRecipe