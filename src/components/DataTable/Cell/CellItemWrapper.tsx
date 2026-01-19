import type { ReactNode } from "react";
import { dataTableCell } from "../../../../styled-system/recipes";

export interface CellItemWrapperProps {
  children: ReactNode;
  className?: string;
}

export function CellItemWrapper({ children, className }: CellItemWrapperProps) {
  const classes = dataTableCell();

  return (
    <div className={`${classes.itemWrapper} ${className ?? ""}`}>{children}</div>
  );
}
