import { useCallback } from "react";
import styled from "styled-components";
import useCalculator from "../hooks/useCalculator";
import Button from "./Button";

function Calculator() {
  const { state, handlers } = useCalculator();
  const { formula, operator, input, result, isPressedEqualButton } = state;

  const handleClickMod = useCallback(() => handlers.handleClickOperator("%"), []);
  const handleClickDivide = useCallback(() => handlers.handleClickOperator("/"), []);
  const handleClickMultiply = useCallback(() => handlers.handleClickOperator("*"), []);
  const handleClickMinus = useCallback(() => handlers.handleClickOperator("-"), []);
  const handleClickPlus = useCallback(() => handlers.handleClickOperator("+"), []);
  const handleClickZero = useCallback(() => handlers.handleClickOperand("0"), []);
  const handleClickOne = useCallback(() => handlers.handleClickOperand("1"), []);
  const handleClickTwo = useCallback(() => handlers.handleClickOperand("2"), []);
  const handleClickThree = useCallback(() => handlers.handleClickOperand("3"), []);
  const handleClickFour = useCallback(() => handlers.handleClickOperand("4"), []);
  const handleClickFive = useCallback(() => handlers.handleClickOperand("5"), []);
  const handleClickSix = useCallback(() => handlers.handleClickOperand("6"), []);
  const handleClickSeven = useCallback(() => handlers.handleClickOperand("7"), []);
  const handleClickEight = useCallback(() => handlers.handleClickOperand("8"), []);
  const handleClickNine = useCallback(() => handlers.handleClickOperand("9"), []);

  return (
    <>
      <FormulaDisplay>
        {formula}
        {operator} {isPressedEqualButton && `= ${input}`}
      </FormulaDisplay>
      <ResultDisplay>{input || result}</ResultDisplay>
      <ButtonContainer>
        <Button label={"%"} onClick={handleClickMod} />
        <Button label={"C"} onClick={handlers.handleClickReset} />
        <Button label={"←"} onClick={handlers.handleClickEraseInput} />
        <Button label={"/"} onClick={handleClickDivide} />
        <Button label={"7"} onClick={handleClickSeven} />
        <Button label={"8"} onClick={handleClickEight} />
        <Button label={"9"} onClick={handleClickNine} />
        <Button label={"*"} onClick={handleClickMultiply} />
        <Button label={"4"} onClick={handleClickFour} />
        <Button label={"5"} onClick={handleClickFive} />
        <Button label={"6"} onClick={handleClickSix} />
        <Button label={"-"} onClick={handleClickMinus} />
        <Button label={"1"} onClick={handleClickOne} />
        <Button label={"2"} onClick={handleClickTwo} />
        <Button label={"3"} onClick={handleClickThree} />
        <Button label={"+"} onClick={handleClickPlus} />
        <Button label={"+/-"} onClick={handlers.handleClickPlusMinus} />
        <Button label={"0"} onClick={handleClickZero} />
        <Button label={"."} onClick={handlers.handleClickPoint} />
        <Button label={"="} onClick={handlers.handleClickEqual} />
      </ButtonContainer>
    </>
  );
}

export default Calculator;

const FormulaDisplay = styled.div`
  width: 20rem;
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
`;

const ResultDisplay = styled.div`
  width: 20rem;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  width: 20rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
