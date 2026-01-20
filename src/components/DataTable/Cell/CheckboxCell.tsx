import { useState } from "react";
import { dataTableCell } from "../../../../styled-system/recipes";

export interface CheckboxCellProps {
  rowNumber: number;
  isSelected: boolean;
  onChange: (checked: boolean) => void;
  isHeader?: boolean;
  isAllSelected?: boolean;
  isSomeSelected?: boolean;
  /** 항상 행 번호만 표시 (체크박스 비활성화) */
  showRowNumber?: boolean;
}

export function CheckboxCell({
  rowNumber,
  isSelected,
  onChange,
  isHeader = false,
  isAllSelected = false,
  isSomeSelected = false,
  showRowNumber = false,
}: CheckboxCellProps) {
  const [isHovered, setIsHovered] = useState(false);
  const classes = dataTableCell({ variant: "utility" });

  // showRowNumber가 true면 항상 행 번호만 표시
  const showCheckbox = !showRowNumber && (isHeader || isHovered || isSelected);

  return (
    <div className={classes.base}>
      <div
        className={classes.container}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={classes.itemWrapper}>
          <div className={classes.item}>
            {showCheckbox ? (
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  checked={isHeader ? isAllSelected : isSelected}
                  ref={
                    isHeader
                      ? (el) => {
                          if (el) {
                            el.indeterminate = isSomeSelected && !isAllSelected;
                          }
                        }
                      : undefined
                  }
                  onChange={(e) => onChange(e.target.checked)}
                />
              </div>
            ) : (
              <span className={classes.rowNumber}>{rowNumber}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
