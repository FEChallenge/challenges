import styled from "styled-components";
import { useEffect, useState } from "react";
import Switch from "../../components/Switch/Switch";
import NumberDisplay from "../../components/NumberDisplay/NumberDisplay";
import { Color } from "../../style/color";
import Button from "../../components/Button/Button";

function Home() {
  const [isTimerMode, setIsTimerMode] = useState<boolean>(false);
  const isClockMode = !isTimerMode;
  const [curTime, setCurTime] = useState<string>("");
  const [clockMode, setClockMode] = useState<"12" | "24">("12");

  useEffect(() => {
    const sec = new Date().getSeconds();
    const timeUntilNextMinute = (60 - sec) * 1_000;
    const ONE_MINUTE_MS = 60_000;
    updateCurTime();

    setTimeout(() => {
      updateCurTime();
      const interval = setInterval(updateCurTime, ONE_MINUTE_MS);

      return () => {
        clearInterval(interval);
      };
    }, timeUntilNextMinute);
  }, []);

  function updateCurTime() {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    const time = `${hour}${minute}`;
    setCurTime(time);
  }

  function calculateAmPm(curTime: string) {
    if (clockMode === "24") {
      return;
    }
    return Number(curTime.slice(0, 2)) < 12 ? "AM" : "PM";
  }

  return (
    <Container>
      {isClockMode && (
        <>
          <NumberDisplay time={curTime} />
          <AmPmIndicator>{calculateAmPm(curTime)}</AmPmIndicator>
        </>
      )}
      {isTimerMode && (
        <>
          <NumberDisplay time="0000" />
        </>
      )}
      <ControlPanel>
        <SwitchContainer>
          <TextContainer>
            <span>Clock</span>
            <span>Timer</span>
          </TextContainer>
          <Switch state={isTimerMode} setState={setIsTimerMode} />
        </SwitchContainer>
        <Buttons>
          {isClockMode && (
            <>
              <Button title="12" />
              <Button title="24" />
            </>
          )}
          {isTimerMode && (
            <>
              <Button title="start" />
              <Button title="pause" />
              <Button title="reset" />
            </>
          )}
        </Buttons>
      </ControlPanel>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  width: 40rem;
  height: 25rem;
  border: 3px solid ${Color.BLACK};
  border-radius: 20px;
  padding-left: 4.5rem;
`;

const ControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6.5rem;
`;

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  border: 2px solid ${Color.BLACK};
  padding: 0.5rem;
  border-radius: 20px;
`;

const AmPmIndicator = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-left: 30rem;
`;
