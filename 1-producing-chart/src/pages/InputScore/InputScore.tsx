import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import ScoreInputForm from "../../components/ScoreInputForm/ScoreInputForm";
import styled from "styled-components";
import { COLOR } from "../../constants/color";

function InputScore() {
  function handleMakeChartButton() {}
  return (
    <Wrapper>
      <Header />
      <Contents>
        <ContentsHeader>
          <div>Student</div>
          <div>Score</div>
        </ContentsHeader>
        <ScoreInputForm name="Alex" />
        <ScoreInputForm name="Tom" />
        <ScoreInputForm name="Ryan" />
        <ScoreInputForm name="Don" />
        <ScoreInputForm name="Emma" />
        <Buttons>
          <Button name="Make chart" onClick={handleMakeChartButton} />
          <Button name="Reset data" />
        </Buttons>
      </Contents>
    </Wrapper>
  );
}

export default InputScore;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Contents = styled.div`
  display: flex;
  width: 24rem;
  padding: 1rem;
  flex-direction: column;
  gap: 1.5rem;
  border: 1px solid ${COLOR.BLACK};
  border-radius: 10px;
`;

const ContentsHeader = styled.div`
  display: flex;
  gap: 9rem;
  padding-left: 3rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
`;
