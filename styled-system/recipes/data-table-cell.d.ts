/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface DataTableCellVariant {
  /**
 * @default "basic"
 */
variant: "basic" | "utility"
/**
 * @default "normal"
 */
size: "normal" | "mini"
}

type DataTableCellVariantMap = {
  [key in keyof DataTableCellVariant]: Array<DataTableCellVariant[key]>
}

type DataTableCellSlot = "base" | "bottomLine" | "rightLine" | "container" | "itemWrapper" | "item" | "text" | "number" | "checkbox" | "rowNumber"

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
 * Cell component styles for DataTable based on Figma Cell-base structure
 */
export declare const dataTableCell: DataTableCellRecipe