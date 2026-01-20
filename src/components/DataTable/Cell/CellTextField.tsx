import { useState, useCallback } from "react";
import { dataTableCell } from "../../../../styled-system/recipes";

export interface CellTextFieldProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function CellTextField({
  value: initialValue,
  onChange,
  placeholder,
  disabled = false,
  className,
}: CellTextFieldProps) {
  const classes = dataTableCell();
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
    },
    []
  );

  const handleBlur = useCallback(() => {
    if (value !== initialValue) {
      onChange?.(value);
    }
  }, [value, initialValue, onChange]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.currentTarget.blur();
      }
      if (e.key === "Escape") {
        setValue(initialValue);
        e.currentTarget.blur();
      }
    },
    [initialValue]
  );

  return (
    <div className={classes.base}>
      <div className={classes.container}>
        <div className={classes.itemWrapper}>
          <div className={`${classes.item} ${className ?? ""}`}>
            <input
              type="text"
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={disabled}
              className={classes.textField}
              aria-label={placeholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
