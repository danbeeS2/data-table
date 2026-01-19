import type { ReactNode } from "react";
import { dataTableCell } from "../../../../styled-system/recipes";

export interface CellItemProps {
  children: ReactNode;
  className?: string;
}

export function CellItem({ children, className }: CellItemProps) {
  const classes = dataTableCell();

  return (
    <div className={`${classes.item} ${className ?? ""}`}>{children}</div>
  );
}
