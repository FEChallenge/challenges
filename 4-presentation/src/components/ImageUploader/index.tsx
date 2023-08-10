import { ChangeEvent } from "react";
import { useImageActions } from "@store/image";

const LABEL_TEXT = "사진 추가";
const ALLOW_FILE_EXTENSION = ".png, .jpeg, .webp, .jpg";

const ImageUploader = () => {
  const { addImage } = useImageActions();

  const handleImageChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files || target.files.length === 0) return;
    addImage(target.files[0]);
  };

  return (
    <div>
      <label
        htmlFor="fileUpload"
        className="flex h-fit w-fit cursor-pointer items-center justify-center rounded bg-purple-400 p-3 text-white hover:bg-purple-600"
      >
        {LABEL_TEXT}
      </label>
      <input
        className="hidden"
        id="fileUpload"
        type="file"
        accept={ALLOW_FILE_EXTENSION}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUploader;