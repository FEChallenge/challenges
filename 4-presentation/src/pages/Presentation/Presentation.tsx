import { useState } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../styles/components/PageWrapper.styled";
import { CommonStyle } from "../../styles/commonStyle";
import Carousel from "../../components/Carousel/Carousel";
import ThumbnailList from "../../components/ThumbnailList/ThumbnailList";
import { useRecoilValue } from "recoil";
import { picturesState } from "../../store/pictures";
import useFileReader from "../../hooks/useFileReader";

function Presentation() {
  const [curPictureIdx, setCurPictureIdx] = useState(0);
  const pictures = useRecoilValue(picturesState);
  const srcs = useFileReader({ files: pictures });
  const totalPictureNumber = srcs.length;

  return (
    <PageWrapper>
      <PresentationWrapper>
        <Carousel srcs={srcs} curPictureIdx={curPictureIdx} setCurPictureIdx={setCurPictureIdx} />
        <ThumbnailList activeThumnailIndex={curPictureIdx} setCurPictureIdx={setCurPictureIdx} />
        <ThumnailIndexIndicator>
          {curPictureIdx + 1} / {totalPictureNumber}
        </ThumnailIndexIndicator>
      </PresentationWrapper>
    </PageWrapper>
  );
}

export default Presentation;

const PresentationWrapper = styled.div`
  ${CommonStyle.FlexColumn}
  gap: 2rem;
`;

const ThumnailIndexIndicator = styled.div`
  width: 38rem;
  ${CommonStyle.FlexCenter}
`;
