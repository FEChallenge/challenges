import { NotationElement } from "../../type";

const OPERATORS = ["+", "-", "*", "/", "%"];
const OPERATOR_PRIORITY: { [key: string]: number } = {
  "*": 2,
  "/": 2,
  "%": 2,
  "+": 1,
  "-": 1,
};

export function isOperator(string: string) {
  return OPERATORS.includes(string);
}

export function convertToPostfixNotation(infixNotationList: NotationElement[]) {
  const outputQueue: NotationElement[] = [];
  const operatorStack: NotationElement[] = [];
  infixNotationList.forEach((el: NotationElement) => {
    if (!isOperator(el)) {
      outputQueue.push(el);
      return;
    }
    const lastOperator = operatorStack.at(-1) as string;
    if (!operatorStack.length || OPERATOR_PRIORITY[el] > OPERATOR_PRIORITY[lastOperator]) {
      operatorStack.push(el);
      return;
    }
    while (operatorStack.length > 0 && OPERATOR_PRIORITY[el] <= OPERATOR_PRIORITY[lastOperator]) {
      const topEl = operatorStack.pop() as string;
      outputQueue.push(topEl);
    }
    operatorStack.push(el);
  });
  operatorStack.reverse().forEach((el) => outputQueue.push(el));

  return outputQueue;
}
