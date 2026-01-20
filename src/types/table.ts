import type {
  ColumnDef,
  Table,
  Row,
  Cell,
  Header,
  SortingState,
} from "@tanstack/react-table";
import type { ReactNode } from "react";

// ============================================
// Figma DS Variants - Cell Base
// ============================================

export type CellSize = "mini" | "normal";

export type CellState = "inactive" | "hover" | "focus" | "focus-active";

export type CellType =
  | "basic-blank"
  | "text"
  | "text-template"
  | "textfield"
  | "auto-complete"
  | "avatar"
  | "chip"
  | "controller"
  | "checkbox-unselected"
  | "checkbox-selected"
  | "drag-handle"
  | "collapse-expand";

export type CellVariant = "basic" | "utility";

export type CellAlign = "left" | "center" | "right";

// ============================================
// Figma DS Variants - Table Row
// ============================================

export type RowState = "inactive" | "row-hover" | "focus-within";

// ============================================
// Figma DS Variants - Table Header
// ============================================

export type HeaderContentsType =
  | "expand"
  | "spacer"
  | "check"
  | "text-left"
  | "text-right"
  | "collapse";

export type SortingIndicator = "ascending" | "descending" | "inactive";

// ============================================
// Chip Variants
// ============================================

export type ChipVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";

// ============================================
// Base Types
// ============================================

export interface BaseRowData {
  id: string;
}

// ============================================
// Context Types
// ============================================

export interface DataTableContextValue<TData> {
  table: Table<TData>;
  size: CellSize;
  enableRowHover: boolean;
  enableCellFocus: boolean;
  enableDragAndDrop: boolean;
  enableRowExpansion: boolean;
}

export interface RowContextValue {
  state: RowState;
  isActive: boolean;
  isSelected: boolean;
  rowIndex: number;
  setRowState: (state: RowState) => void;
}

export interface CellContextValue {
  size: CellSize;
  state: CellState;
  type: CellType;
  setCellState: (state: CellState) => void;
}

// ============================================
// DataTable Props
// ============================================

export interface DataTableProps<TData extends BaseRowData> {
  data: TData[];
  columns: ColumnDef<TData>[];

  // Pagination
  pageSize?: number;
  pageSizeOptions?: number[];
  enablePagination?: boolean;

  // Selection
  enableRowSelection?: boolean;
  onRowSelectionChange?: (selectedRows: TData[]) => void;

  // Figma DS Options
  size?: CellSize;
  enableRowHover?: boolean;
  enableCellFocus?: boolean;
  enableDragAndDrop?: boolean;
  enableRowExpansion?: boolean;

  // Sorting
  enableSorting?: boolean;
  defaultSortingState?: SortingState;

  // UI
  emptyMessage?: string;
  stickyHeader?: boolean;

  // Compound children
  children?: ReactNode;
}

export interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  pageSizeOptions?: number[];
}

// ============================================
// Table Structure Props
// ============================================

export interface TableRootProps {
  children: ReactNode;
  stickyHeader?: boolean;
  className?: string;
}

export interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface TableHeaderRowProps {
  children: ReactNode;
  className?: string;
}

export interface TableBodyProps {
  children: ReactNode;
  emptyMessage?: string;
  className?: string;
}

export interface TableRowProps<TData> {
  row: Row<TData>;
  rowIndex: number;
  isActive?: boolean;
  children?: ReactNode;
  className?: string;
}

export interface TableCellProps {
  children: ReactNode;
  className?: string;
}

// ============================================
// Header Cell Props
// ============================================

export interface HeaderCellBaseProps {
  header?: Header<unknown, unknown>;
  contentsType?: HeaderContentsType;
  sortingIndicator?: SortingIndicator;
  align?: CellAlign;
  sticky?: boolean;
  children?: ReactNode;
  className?: string;
}

export interface HeaderCellTextProps
  extends Omit<HeaderCellBaseProps, "contentsType"> {
  enableSorting?: boolean;
  onSort?: () => void;
}

export interface HeaderCellCheckProps {
  isAllSelected: boolean;
  isSomeSelected: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export interface HeaderCellExpandProps {
  onExpandAll?: () => void;
  className?: string;
}

export interface HeaderCellCollapseProps {
  onCollapseAll?: () => void;
  className?: string;
}

// ============================================
// Cell Base Props
// ============================================

export interface CellBaseProps {
  cell?: Cell<unknown, unknown>;
  size?: CellSize;
  state?: CellState;
  variant?: CellVariant;
  align?: CellAlign;
  showBottomLine?: boolean;
  showRightLine?: boolean;
  children: ReactNode;
  className?: string;
}

// ============================================
// Cell Content Props
// ============================================

export interface CellBlankProps {
  className?: string;
}

export interface CellTextProps {
  value: string | number | null | undefined;
  isTemplate?: boolean;
  breadcrumbs?: string[];
  description?: string;
  className?: string;
}

export interface CellTextFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export interface CellAutoCompleteProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export interface CellAvatarProps {
  src?: string;
  name: string;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  className?: string;
}

export interface CellChipProps {
  label: string;
  variant?: ChipVariant;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export interface CellControllerProps {
  children: ReactNode;
  className?: string;
}

export interface CellCheckboxProps {
  rowNumber: number;
  isSelected: boolean;
  onChange: (checked: boolean) => void;
  isHeader?: boolean;
  isAllSelected?: boolean;
  isSomeSelected?: boolean;
  showRowNumber?: boolean;
}

export interface CellDragHandleProps {
  onDragStart?: () => void;
  onDragEnd?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface CellCollapseExpandProps {
  isExpanded: boolean;
  onToggle: () => void;
  disabled?: boolean;
  className?: string;
}

export interface CellNumberProps {
  value: number | null | undefined;
  format?: "number" | "currency" | "percent";
  locale?: string;
  className?: string;
}

// ============================================
// Column Meta (TanStack Table extension)
// ============================================

export interface ColumnMeta {
  width?: number | string;
  minWidth?: number;
  maxWidth?: number;
  align?: CellAlign;
  cellType?: CellType;
  headerType?: HeaderContentsType;
  sticky?: "left" | "right";
  resizable?: boolean;
}

// Extend TanStack Table's ColumnMeta
declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends unknown, TValue>
    extends Record<string, unknown> {
    width?: number | string;
    minWidth?: number;
    maxWidth?: number;
    align?: CellAlign;
    cellType?: CellType;
    headerType?: HeaderContentsType;
    sticky?: "left" | "right";
    resizable?: boolean;
  }
}
