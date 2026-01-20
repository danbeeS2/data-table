import { useState, useCallback, useMemo, type FocusEvent } from "react";
import type { RowState } from "../../../types/table";

export interface UseRowStateOptions {
  initialState?: RowState;
  isSelected?: boolean;
  disabled?: boolean;
}

export interface UseRowStateReturn {
  state: RowState;
  isSelected: boolean;
  hasFocusWithin: boolean;
  handlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocusCapture: () => void;
    onBlurCapture: (e: FocusEvent<HTMLElement>) => void;
  };
  setState: (state: RowState) => void;
}

export function useRowState(
  options: UseRowStateOptions = {}
): UseRowStateReturn {
  const {
    initialState = "inactive",
    isSelected = false,
    disabled = false,
  } = options;

  const [state, setState] = useState<RowState>(initialState);
  const [hasFocusWithin, setHasFocusWithin] = useState(false);

  const handlers = useMemo(() => {
    if (disabled) {
      return {
        onMouseEnter: () => {},
        onMouseLeave: () => {},
        onFocusCapture: () => {},
        onBlurCapture: () => {},
      };
    }

    return {
      onMouseEnter: () => {
        if (!hasFocusWithin) {
          setState("row-hover");
        }
      },
      onMouseLeave: () => {
        if (!hasFocusWithin) {
          setState("inactive");
        }
      },
      onFocusCapture: () => {
        setHasFocusWithin(true);
        setState("focus-within");
      },
      onBlurCapture: (e: FocusEvent<HTMLElement>) => {
        // Check if focus is still within the row
        const currentTarget = e.currentTarget;
        const relatedTarget = e.relatedTarget as Node | null;

        if (!relatedTarget || !currentTarget.contains(relatedTarget)) {
          setHasFocusWithin(false);
          setState("inactive");
        }
      },
    };
  }, [disabled, hasFocusWithin]);

  const setStateWithValidation = useCallback(
    (newState: RowState) => {
      if (!disabled) {
        setState(newState);
      }
    },
    [disabled]
  );

  return {
    state,
    isSelected,
    hasFocusWithin,
    handlers,
    setState: setStateWithValidation,
  };
}
