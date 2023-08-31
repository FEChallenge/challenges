import { useReducer } from "react";
import { ActionType, initialState, reducer } from "../reducer";
import { Operand, Operator } from "../type";

function useCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlers = {
    handleClickReset: () => dispatch({ type: ActionType.CLICK_RESET }),
    handleClickEraseInput: () => dispatch({ type: ActionType.CLICK_ERASE_INPUT }),
    handleClickPlusMinus: () => dispatch({ type: ActionType.CLICK_PLUS_MINUS }),
    handleClickPoint: () => dispatch({ type: ActionType.CLICK_POINT }),
    handleClickEqual: () => dispatch({ type: ActionType.CLICK_EQUAL }),
    handleClickOperator: (operator: Operator) => dispatch({ type: ActionType.CLICK_OPERATOR, payload: operator }),
    handleClickOperand: (operand: Operand) => dispatch({ type: ActionType.CLICK_OPERAND, payload: operand }),
  };

  return { state, handlers };
}

export default useCalculator;
