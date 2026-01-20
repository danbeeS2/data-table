/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface DataTableRowVariant {
  /**
 * @default "inactive"
 */
state: "inactive" | "row-hover" | "focus-within"
/**
 * @default false
 */
isActive: boolean
/**
 * @default false
 */
isSelected: boolean
/**
 * @default "normal"
 */
size: "normal" | "mini"
}

type DataTableRowVariantMap = {
  [key in keyof DataTableRowVariant]: Array<DataTableRowVariant[key]>
}

type DataTableRowSlot = "row" | "rowInner"

export type DataTableRowVariantProps = {
  [key in keyof DataTableRowVariant]?: DataTableRowVariant[key] | undefined
}

export interface DataTableRowRecipe {
  __slot: DataTableRowSlot
  __type: DataTableRowVariantProps
  (props?: DataTableRowVariantProps): Pretty<Record<DataTableRowSlot, string>>
  raw: (props?: DataTableRowVariantProps) => DataTableRowVariantProps
  variantMap: DataTableRowVariantMap
  variantKeys: Array<keyof DataTableRowVariant>
  splitVariantProps<Props extends DataTableRowVariantProps>(props: Props): [DataTableRowVariantProps, Pretty<DistributiveOmit<Props, keyof DataTableRowVariantProps>>]
  getVariantProps: (props?: DataTableRowVariantProps) => DataTableRowVariantProps
}

/**
 * Table Row styles based on Figma DS - supports state, isActive, isSelected variants
 */
export declare const dataTableRow: DataTableRowRecipe