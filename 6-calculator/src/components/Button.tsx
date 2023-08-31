import { MouseEventHandler } from "react";
import { Operand, Operator } from "../type";
import styled from "styled-components";

type CalculatorButtonLabel = Operand | Operator | "C" | "←" | "+/-" | "." | "=";

interface ButtonProps {
  label: CalculatorButtonLabel;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {label}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  height: 3rem;
  font-size: 1rem;
  cursor: pointer;
`;
