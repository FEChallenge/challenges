import { NotationElement, Operand, Operator } from "./type";
import calculate from "./utils/calculateInfixNotation/calculateInfixNotation";

const INIT_INPUT = "0";
export const initialState: State = {
  formula: [] as NotationElement[],
  operator: "",
  result: "",
  input: INIT_INPUT,
  isPressedEqualButton: false,
};

export interface State {
  formula: NotationElement[];
  operator: Operator;
  result: string;
  input: string;
  isPressedEqualButton: boolean;
}

export enum ActionType {
  CLICK_RESET = "CLICK_RESET",
  CLICK_ERASE_INPUT = "CLICK_ERASE_INPUT",
  CLICK_PLUS_MINUS = "CLICK_PLUS_MINUS",
  CLICK_POINT = "CLICK_POINT",
  CLICK_EQUAL = "CLICK_EQUAL",
  CLICK_OPERAND = "CLICK_OPERAND",
  CLICK_OPERATOR = "CLICK_OPERATOR",
}

type Action =
  | { type: ActionType.CLICK_RESET }
  | { type: ActionType.CLICK_ERASE_INPUT }
  | { type: ActionType.CLICK_PLUS_MINUS }
  | { type: ActionType.CLICK_POINT }
  | { type: ActionType.CLICK_EQUAL }
  | { type: ActionType.CLICK_OPERAND; payload: Operand }
  | { type: ActionType.CLICK_OPERATOR; payload: Operator };

export function reducer(state: State, action: Action) {
  const { formula, input, result, isPressedEqualButton, operator } = state;
  switch (action.type) {
    case ActionType.CLICK_RESET:
      return initialState;
    case ActionType.CLICK_ERASE_INPUT:
      if (input.length === 1) {
        return { ...state, input: "0" };
      }
      return { ...state, input: input.slice(0, -1) };
    case ActionType.CLICK_PLUS_MINUS:
      if (input) {
        return { ...state, input: String(+input * -1) };
      }
      return { ...state, result: String(+result * -1) };
    case ActionType.CLICK_POINT:
      const hasComma = input.includes(".");
      if (!hasComma) {
        return { ...state, input: input + "." };
      }
      return state;
    case ActionType.CLICK_EQUAL:
      const newFormula = [...formula, input];
      return {
        ...state,
        formula: newFormula,
        result: calculate(newFormula),
        input: "",
        isPressedEqualButton: true,
      };
    case ActionType.CLICK_OPERATOR: {
      let newFormula = [...formula];
      let newResult = result;
      let newInput = input;
      let newIsPressedEqualButton = isPressedEqualButton;

      if (isPressedEqualButton) {
        newFormula = [result];
        newIsPressedEqualButton = false;
      }
      if (input) {
        newFormula = [...formula, input];
        newResult = calculate([...formula, input]);
        newInput = "";
      }

      return {
        ...state,
        formula: newFormula,
        result: newResult,
        input: newInput,
        isPressedEqualButton: newIsPressedEqualButton,
        operator: action.payload,
      };
    }
    case ActionType.CLICK_OPERAND: {
      let newFormula = [...formula];
      let newInput = input;
      let newOperator = operator;
      let newIsPressedEqualButton = isPressedEqualButton;
      const operand = action.payload;

      if (isPressedEqualButton) {
        newInput = operand;
        newOperator = "";
        newFormula = [];
        newIsPressedEqualButton = false;
      }
      const isInitialInput = input === INIT_INPUT;
      newInput = isInitialInput ? operand : input + operand;
      if (operator) {
        newInput = operand;
        newFormula = [...formula, operator];
        newOperator = "";
      }

      return {
        ...state,
        input: newInput,
        operator: newOperator,
        formula: newFormula,
        isPressedEqualButton: newIsPressedEqualButton,
      };
    }
  }
}
