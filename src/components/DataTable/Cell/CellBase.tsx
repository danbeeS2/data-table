import type { ReactNode } from "react";
import { dataTableCell } from "../../../../styled-system/recipes";

export interface CellBaseProps {
  children: ReactNode;
  showBottomLine?: boolean;
  showRightLine?: boolean;
  className?: string;
}

export function CellBase({
  children,
  showBottomLine = false,
  showRightLine = false,
  className,
}: CellBaseProps) {
  const classes = dataTableCell();

  return (
    <div className={`${classes.base} ${className ?? ""}`}>
      {showBottomLine && <div className={classes.bottomLine} />}
      {showRightLine && <div className={classes.rightLine} />}
      {children}
    </div>
  );
}
