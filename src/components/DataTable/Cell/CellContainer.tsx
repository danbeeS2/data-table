import type { ReactNode } from "react";
import { dataTableCell } from "../../../../styled-system/recipes";

export interface CellContainerProps {
  children: ReactNode;
  variant?: "basic" | "utility";
  className?: string;
}

export function CellContainer({
  children,
  variant = "basic",
  className,
}: CellContainerProps) {
  const classes = dataTableCell({ variant });

  return (
    <div className={`${classes.container} ${className ?? ""}`}>{children}</div>
  );
}
