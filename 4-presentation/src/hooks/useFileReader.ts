import { useState, useEffect } from "react";

interface useFileReaderProp {
  files: File[];
}

function useFileReader({ files }: useFileReaderProp): string[] {
  const [srcs, setSrcs] = useState<string[]>([]);

  useEffect(() => {
    readFiles();

    async function readFiles() {
      const promises = files.map(readAsDataURL);
      const results = await Promise.all(promises);
      setSrcs(results as string[]);
    }
  }, [files]);

  return srcs;
}

function readAsDataURL(file: File) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onloadend = () => resolve(fileReader.result);
    fileReader.onerror = () => reject(new Error("Data URL로 변경하는 도중 에러가 발생했습니다."));

    fileReader.readAsDataURL(file);
  });
}

export default useFileReader;
