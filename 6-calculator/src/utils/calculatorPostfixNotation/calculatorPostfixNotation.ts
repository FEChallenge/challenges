import { NotationElement, Operand, Operator } from "../../type";
import { isOperator } from "../convertToPostfixNotation/convertToPostfixNotation";

export function calculatePostfixNotation(postfixNotation: NotationElement[]) {
  const postfixNotationList = postfixNotation.reverse();
  const stack = [postfixNotationList.pop()] as NotationElement[];
  while (postfixNotationList.length > 0) {
    const cur = postfixNotationList.pop() as Operator;
    if (isOperator(cur)) {
      const right = stack.pop() as Operand;
      const left = stack.pop() as Operand;
      const result = calculateOperations(left, right, cur);
      stack.push(String(result));
    } else {
      stack.push(cur);
    }
  }
  return stack[0];
}

function calculateOperations(left: Operand, right: Operand, operator: Operator): number {
  const leftTerm = +left;
  const rightTerm = +right;
  if (operator === "+") {
    return leftTerm + rightTerm;
  }
  if (operator === "-") {
    return leftTerm - rightTerm;
  }
  if (operator === "*") {
    return leftTerm * rightTerm;
  }
  if (operator === "/") {
    if (rightTerm === 0) {
      throw new Error("0 으로 나눌 수 없습니다.");
    }
    return leftTerm / rightTerm;
  }
  if (operator === "%") {
    return leftTerm % rightTerm;
  }
  throw new Error(`${operator}는 올바른 연산자가 아닙니다.`);
}
