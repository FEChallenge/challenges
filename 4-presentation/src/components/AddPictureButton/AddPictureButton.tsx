import { useSetRecoilState } from "recoil";
import { picturesState } from "../../store/pictures";
import InputFile from "../common/InputFile/InputFile";
import { ChangeEvent } from "react";
import { getFileExtention, toStringWithComma } from "../../utils/util";
import useRouter from "../../hooks/useRouter";
import { RoutePath } from "../../route";

const ALLOWED_FILE_EXTENTIONS = ["png", "jpeg"];
const NOT_ALLOWED_EXTENTION_MESSAGE = `${ALLOWED_FILE_EXTENTIONS.join(", ")} 파일만 추가할 수 있습니다.`;
const BUTTON_NAME = "사진 추가";

function AddPictureButton() {
  const allowedFileExtention = toStringWithComma(ALLOWED_FILE_EXTENTIONS);
  const setPictures = useSetRecoilState(picturesState);
  const { routeTo } = useRouter();

  return <InputFile name={BUTTON_NAME} onChange={handleChange} accept={allowedFileExtention} isMultiple />;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = e.target.files;
    const hasSelectedFiles = !!selectedFiles?.length;

    if (!hasSelectedFiles) return;
    if (!validateFileExtention(selectedFiles)) {
      alert(NOT_ALLOWED_EXTENTION_MESSAGE);
      return;
    }
    setPictures([...selectedFiles]);
    routeTo(RoutePath.Presentation);
  }

  function validateFileExtention(files: FileList) {
    return [...files].every((file: File) => {
      const extension = getFileExtention(file);
      return ALLOWED_FILE_EXTENTIONS.includes(extension);
    });
  }
}

export default AddPictureButton;
