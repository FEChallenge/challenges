import { isOperator } from "../postfixNotation/postfixNotation";

export function calculatePostfixNotation(postfixNotation) {
  const postfixNotationList = postfixNotation.reverse();
  const s = [postfixNotationList.pop()];
  while (postfixNotationList.length > 0) {
    const cur = postfixNotationList.pop();
    if (isOperator(cur)) {
      const right = +s.pop();
      const left = +s.pop();
      const result = calculateOperations(left, right, cur);
      s.push(result);
    } else {
      s.push(cur);
    }
  }
  return s[0];
}

function calculateOperations(left, right, operator) {
  if (operator === "+") {
    return left + right;
  }
  if (operator === "-") {
    return left - right;
  }
  if (operator === "*") {
    return left * right;
  }
  if (operator === "/") {
    return left / right;
  }
  if (operator === "%") {
    return left % right;
  }
}