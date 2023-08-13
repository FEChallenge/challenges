import { Dispatch, SetStateAction } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { picturesState } from "../../store/pictures";
import useFileReader from "../../hooks/useFileReader";
import Thumbnail from "../Thumbnail/Thumbnail";

interface ThumbnailListProp {
  activeThumnailIndex: number;
  setCurPictureIdx: Dispatch<SetStateAction<number>>;
}

function ThumbnailList({ activeThumnailIndex, setCurPictureIdx }: ThumbnailListProp) {
  const pictures = useRecoilValue(picturesState);
  const srcs = useFileReader({ files: pictures });

  return (
    <ThumbnailListWrapper>
      <ImgsWrapper>
        {srcs.map((src, idx) => {
          return (
            <ImgWrapper>
              <Thumbnail
                src={src}
                idx={idx}
                isActive={idx === activeThumnailIndex}
                setCurPictureIdx={setCurPictureIdx}
                onClick={() => setCurPictureIdx(idx)}
              />
            </ImgWrapper>
          );
        })}
      </ImgsWrapper>
    </ThumbnailListWrapper>
  );
}

export default ThumbnailList;

const ThumbnailListWrapper = styled.div`
  display: flex;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const ImgsWrapper = styled.div`
  display: flex;
  width: 38rem;
  justify-content: space-between;
`;
