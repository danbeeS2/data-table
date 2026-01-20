import { useState, useCallback, useMemo } from "react";
import type { CellState } from "../../../types/table";

export interface UseCellStateOptions {
  initialState?: CellState;
  disabled?: boolean;
}

export interface UseCellStateReturn {
  state: CellState;
  isActive: boolean;
  handlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocus: () => void;
    onBlur: () => void;
  };
  activate: () => void;
  deactivate: () => void;
  setState: (state: CellState) => void;
}

export function useCellState(
  options: UseCellStateOptions = {}
): UseCellStateReturn {
  const { initialState = "inactive", disabled = false } = options;

  const [state, setState] = useState<CellState>(initialState);
  const [isActive, setIsActive] = useState(false);

  const handlers = useMemo(() => {
    if (disabled) {
      return {
        onMouseEnter: () => {},
        onMouseLeave: () => {},
        onFocus: () => {},
        onBlur: () => {},
      };
    }

    return {
      onMouseEnter: () => {
        if (state !== "focus" && state !== "focus-active") {
          setState("hover");
        }
      },
      onMouseLeave: () => {
        if (state === "hover") {
          setState(isActive ? "focus-active" : "inactive");
        }
      },
      onFocus: () => {
        setState(isActive ? "focus-active" : "focus");
      },
      onBlur: () => {
        setState("inactive");
        setIsActive(false);
      },
    };
  }, [disabled, state, isActive]);

  const activate = useCallback(() => {
    if (!disabled) {
      setIsActive(true);
      setState("focus-active");
    }
  }, [disabled]);

  const deactivate = useCallback(() => {
    setIsActive(false);
    setState("inactive");
  }, []);

  const setStateWithValidation = useCallback(
    (newState: CellState) => {
      if (!disabled) {
        setState(newState);
      }
    },
    [disabled]
  );

  return {
    state,
    isActive,
    handlers,
    activate,
    deactivate,
    setState: setStateWithValidation,
  };
}
