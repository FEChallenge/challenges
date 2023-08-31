import { convertToPostfixNotation } from "../convertToPostfixNotation/convertToPostfixNotation";
import { calculatePostfixNotation } from "../calculatorPostfixNotation/calculatorPostfixNotation";
import { NotationElement } from "../../type";

type InfixNotation = NotationElement[];

function calculateInfixNotation(infixNotation: InfixNotation) {
  const postfixNotation = convertToPostfixNotation(infixNotation);
  const result = calculatePostfixNotation(postfixNotation);
  return result;
}

export default calculateInfixNotation;
