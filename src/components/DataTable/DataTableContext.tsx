import { createContext, useContext, type ReactNode } from "react";
import type { Table } from "@tanstack/react-table";
import type {
  CellSize,
  CellState,
  CellType,
  RowState,
  DataTableContextValue,
  RowContextValue,
  CellContextValue,
} from "../../types/table";

// ============================================
// 1. DataTable Level Context
// ============================================

const DataTableContext = createContext<DataTableContextValue<unknown> | null>(
  null
);

export interface DataTableProviderProps<TData> {
  children: ReactNode;
  value: DataTableContextValue<TData>;
}

export function DataTableProvider<TData>({
  children,
  value,
}: DataTableProviderProps<TData>) {
  return (
    <DataTableContext.Provider value={value as DataTableContextValue<unknown>}>
      {children}
    </DataTableContext.Provider>
  );
}

export function useDataTable<TData = unknown>(): DataTableContextValue<TData> {
  const context = useContext(DataTableContext);
  if (!context) {
    throw new Error("useDataTable must be used within DataTableProvider");
  }
  return context as DataTableContextValue<TData>;
}

// Optional hook that doesn't throw
export function useDataTableOptional<
  TData = unknown,
>(): DataTableContextValue<TData> | null {
  return useContext(DataTableContext) as DataTableContextValue<TData> | null;
}

// ============================================
// 2. Row Level Context
// ============================================

const RowContext = createContext<RowContextValue | null>(null);

export interface RowProviderProps {
  children: ReactNode;
  value: RowContextValue;
}

export function RowProvider({ children, value }: RowProviderProps) {
  return <RowContext.Provider value={value}>{children}</RowContext.Provider>;
}

export function useRowContext(): RowContextValue {
  const context = useContext(RowContext);
  if (!context) {
    throw new Error("useRowContext must be used within RowProvider");
  }
  return context;
}

// Optional hook that doesn't throw
export function useRowContextOptional(): RowContextValue | null {
  return useContext(RowContext);
}

// ============================================
// 3. Cell Level Context (Optional)
// ============================================

const CellContext = createContext<CellContextValue | null>(null);

export interface CellProviderProps {
  children: ReactNode;
  value: CellContextValue;
}

export function CellProvider({ children, value }: CellProviderProps) {
  return <CellContext.Provider value={value}>{children}</CellContext.Provider>;
}

export function useCellContext(): CellContextValue | null {
  // Cell context is optional - components can work without it
  return useContext(CellContext);
}

// ============================================
// Utility: Create Context Value Helpers
// ============================================

export function createDataTableContextValue<TData>(
  table: Table<TData>,
  options: {
    size?: CellSize;
    enableRowHover?: boolean;
    enableCellFocus?: boolean;
    enableDragAndDrop?: boolean;
    enableRowExpansion?: boolean;
  } = {}
): DataTableContextValue<TData> {
  return {
    table,
    size: options.size ?? "normal",
    enableRowHover: options.enableRowHover ?? true,
    enableCellFocus: options.enableCellFocus ?? false,
    enableDragAndDrop: options.enableDragAndDrop ?? false,
    enableRowExpansion: options.enableRowExpansion ?? false,
  };
}

export function createRowContextValue(
  rowIndex: number,
  options: {
    state?: RowState;
    isActive?: boolean;
    isSelected?: boolean;
    setRowState?: (state: RowState) => void;
  } = {}
): RowContextValue {
  return {
    state: options.state ?? "inactive",
    isActive: options.isActive ?? false,
    isSelected: options.isSelected ?? false,
    rowIndex,
    setRowState: options.setRowState ?? (() => {}),
  };
}

export function createCellContextValue(options: {
  size?: CellSize;
  state?: CellState;
  type?: CellType;
  setCellState?: (state: CellState) => void;
}): CellContextValue {
  return {
    size: options.size ?? "normal",
    state: options.state ?? "inactive",
    type: options.type ?? "text",
    setCellState: options.setCellState ?? (() => {}),
  };
}
