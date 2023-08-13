import styled from "styled-components";
import { CommonStyle } from "../../../styles/commonStyle";
import { Color } from "../../../styles/color";
import { ChangeEventHandler } from "react";

interface InputFileProp {
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  accept?: string;
  isMultiple?: boolean;
}

function InputFile({ name, onChange, accept, isMultiple }: InputFileProp) {
  return (
    <>
      <StyledInputFile type="file" onChange={onChange} id="input-file" accept={accept} multiple={isMultiple}></StyledInputFile>
      <Label htmlFor="input-file">{name}</Label>
    </>
  );
}

export default InputFile;

const StyledInputFile = styled.input`
  display: none;
`;

const Label = styled.label`
  width: fit-content;
  padding: 1rem;
  ${CommonStyle.BlackBorder}
  ${CommonStyle.BorderRadius}

  font-size: 1rem;
  font-weight: 700;

  background-color: ${Color.GreenDarnerTail};
  &:hover {
    background-color: ${Color.ElectronBlue};
  }

  cursor: pointer;
`;
