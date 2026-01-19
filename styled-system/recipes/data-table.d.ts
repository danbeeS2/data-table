/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface DataTableVariant {
  /**
 * @default "md"
 */
size: "sm" | "md" | "lg"
/**
 * @default false
 */
stickyHeader: boolean
/**
 * @default false
 */
zebra: boolean
/**
 * @default "plain"
 */
variant: "plain" | "card"
}

type DataTableVariantMap = {
  [key in keyof DataTableVariant]: Array<DataTableVariant[key]>
}

type DataTableSlot = "root" | "table" | "thead" | "tbody" | "tr" | "th" | "td" | "empty" | "selectionCell" | "selectionHeaderCell" | "rowNumber" | "checkbox"

export type DataTableVariantProps = {
  [key in keyof DataTableVariant]?: ConditionalValue<DataTableVariant[key]> | undefined
}

export interface DataTableRecipe {
  __slot: DataTableSlot
  __type: DataTableVariantProps
  (props?: DataTableVariantProps): Pretty<Record<DataTableSlot, string>>
  raw: (props?: DataTableVariantProps) => DataTableVariantProps
  variantMap: DataTableVariantMap
  variantKeys: Array<keyof DataTableVariant>
  splitVariantProps<Props extends DataTableVariantProps>(props: Props): [DataTableVariantProps, Pretty<DistributiveOmit<Props, keyof DataTableVariantProps>>]
  getVariantProps: (props?: DataTableVariantProps) => DataTableVariantProps
}

/**
 * Styles for TanStack DataTable component based on Figma design
 */
export declare const dataTable: DataTableRecipe