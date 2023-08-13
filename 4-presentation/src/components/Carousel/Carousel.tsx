import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { Color } from "../../styles/color";
import { CommonStyle } from "../../styles/commonStyle";

const PICTURE_SIZE = "480";

interface CarouselProp {
  srcs: string[];
  curPictureIdx: number;
  setCurPictureIdx: Dispatch<SetStateAction<number>>;
}

function Carousel({ srcs, curPictureIdx, setCurPictureIdx }: CarouselProp) {
  const [isMoving, setIsMoving] = useState(false);
  const isFirstIndex = curPictureIdx === 0;
  const isLastIndex = curPictureIdx === srcs.length - 1;

  return (
    <CarouselWrapper>
      <ArrowLeftButton onClick={handleClickArrowLeft} disabled={isMoving || isFirstIndex} />
      <PicturesWrapper>
        <Pictures
          $idx={curPictureIdx}
          onTransitionEnd={() => {
            setIsMoving(false);
          }}
        >
          {srcs.map((src) => {
            return <Img src={src} alt="유저가 업로드한 사진입니다." />;
          })}
        </Pictures>
      </PicturesWrapper>
      <ArrowRightButton onClick={handleClickArrowRight} disabled={isMoving || isLastIndex} />
    </CarouselWrapper>
  );

  function handleClickArrowLeft() {
    setIsMoving(true);
    setCurPictureIdx(curPictureIdx - 1);
  }

  function handleClickArrowRight() {
    setIsMoving(true);
    setCurPictureIdx(curPictureIdx + 1);
  }
}

export default Carousel;

const CarouselWrapper = styled.div`
  ${CommonStyle.FlexCenter}
  gap: 2rem;
`;

const ArrowButton = styled.button`
  width: 0;
  height: 0;
  border-top: 2rem solid ${Color.White};
  border-bottom: 2rem solid ${Color.White};

  &:disabled {
    cursor: auto;
  }
`;

const ArrowLeftButton = styled(ArrowButton)`
  border-right: 2rem solid ${Color.GreenDarnerTail};

  &:hover {
    border-right: 2rem solid ${Color.ElectronBlue};
  }

  &:disabled {
    border-right: 2rem solid ${Color.Grey};
  }
`;

const ArrowRightButton = styled(ArrowButton)`
  border-left: 2rem solid ${Color.GreenDarnerTail};

  &:hover {
    border-left: 2rem solid ${Color.ElectronBlue};
  }

  &:disabled {
    border-left: 2rem solid ${Color.Grey};
  }
`;

const Img = styled.img`
  width: 30rem;
  height: 30rem;
  ${CommonStyle.BlackBorder}
  ${CommonStyle.BorderRadius}
`;

const PicturesWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  overflow: hidden;
`;

const Pictures = styled.div<{ $idx: number }>`
  display: flex;
  transform: ${({ $idx }) => `translateX(${-PICTURE_SIZE * $idx}px)`};
  transition: 0.25s;
`;
