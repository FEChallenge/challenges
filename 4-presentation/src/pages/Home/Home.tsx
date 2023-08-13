import styled from "styled-components";
import AddPictureButton from "../../components/AddPictureButton/AddPictureButton";
import { PageWrapper } from "../../styles/components/PageWrapper.styled";
import { CommonStyle } from "../../styles/commonStyle";

function Home() {
  return (
    <PageWrapper>
      <HomeWrapper>
        <Title>4th challenge - Presentation</Title>
        <AddPictureButton />
      </HomeWrapper>
    </PageWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  ${CommonStyle.FlexColumn}
  align-items: center;
`;

const Title = styled.h1`
  position: relative;
  top: -12rem;

  font-size: 2rem;
`;
