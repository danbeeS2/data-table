// Main components
export { DataTable } from "./DataTable";
export { DataTablePagination } from "./DataTablePagination";

// Column Helper
export { createColumnHelper } from "./columnHelper";
export type {
  ColumnHelper,
  CommonColumnOptions,
  TextOptions,
  NumberOptions,
  DateOptions,
  ChipOptions,
  AvatarOptions,
  LinkOptions,
  TextFieldOptions,
  CheckboxOptions,
  ControllerOptions,
  ActionItem,
  CustomOptions,
} from "./columnHelper";

// Cell components - Structure
export { CellBase, CellContainer, CellItemWrapper, CellItem } from "./Cell";

// Cell components - Content (original names)
export { TextCell, CheckboxCell, NumberCell } from "./Cell";

// Cell components - Content (new)
export {
  CellText,
  CellNumber,
  CellCheckbox,
  CellChip,
  CellAvatar,
  CellDate,
  CellLink,
  CellTextField,
  CellController,
} from "./Cell";

// Header Cell components
export { HeaderCellCheck } from "./HeaderCell";

// Context
export {
  DataTableProvider,
  useDataTable,
  useDataTableOptional,
  RowProvider,
  useRowContext,
  useRowContextOptional,
  CellProvider,
  useCellContext,
  createDataTableContextValue,
  createRowContextValue,
  createCellContextValue,
} from "./DataTableContext";

// Hooks
export { useCellState, useRowState } from "./hooks";
export type { UseCellStateOptions, UseCellStateReturn } from "./hooks";
export type { UseRowStateOptions, UseRowStateReturn } from "./hooks";

// Types (re-export from types/table.ts)
export type {
  CellSize,
  CellState,
  CellType,
  CellVariant,
  CellAlign,
  RowState,
  HeaderContentsType,
  SortingIndicator,
  ChipVariant,
  BaseRowData,
  DataTableProps,
  DataTableContextValue,
  RowContextValue,
  CellContextValue,
} from "../../types/table";
