/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface DataTableHeaderVariant {
  /**
 * @default "text-left"
 */
contentsType: "expand" | "spacer" | "check" | "text-left" | "text-right" | "collapse"
/**
 * @default "inactive"
 */
sortingState: "ascending" | "descending" | "inactive"
/**
 * @default false
 */
sortable: boolean
/**
 * @default false
 */
sticky: boolean
/**
 * @default "normal"
 */
size: "normal" | "mini"
/**
 * @default false
 */
resizable: boolean
}

type DataTableHeaderVariantMap = {
  [key in keyof DataTableHeaderVariant]: Array<DataTableHeaderVariant[key]>
}

type DataTableHeaderSlot = "cell" | "content" | "text" | "sortingIndicator" | "sortIcon" | "expandIcon" | "collapseIcon" | "checkbox" | "spacer" | "tooltipIcon"

export type DataTableHeaderVariantProps = {
  [key in keyof DataTableHeaderVariant]?: ConditionalValue<DataTableHeaderVariant[key]> | undefined
}

export interface DataTableHeaderRecipe {
  __slot: DataTableHeaderSlot
  __type: DataTableHeaderVariantProps
  (props?: DataTableHeaderVariantProps): Pretty<Record<DataTableHeaderSlot, string>>
  raw: (props?: DataTableHeaderVariantProps) => DataTableHeaderVariantProps
  variantMap: DataTableHeaderVariantMap
  variantKeys: Array<keyof DataTableHeaderVariant>
  splitVariantProps<Props extends DataTableHeaderVariantProps>(props: Props): [DataTableHeaderVariantProps, Pretty<DistributiveOmit<Props, keyof DataTableHeaderVariantProps>>]
  getVariantProps: (props?: DataTableHeaderVariantProps) => DataTableHeaderVariantProps
}

/**
 * Table Header Cell styles based on Figma DS - supports contentsType, sorting, sticky variants
 */
export declare const dataTableHeader: DataTableHeaderRecipe