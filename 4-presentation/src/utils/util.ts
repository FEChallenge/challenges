export function toStringWithComma(array: string[]) {
  return array.map((el) => `.${el}`).join(",");
}

export function getFileExtention(file: File) {
  const fileName = file.name;
  const lastCommaIndex = fileName.lastIndexOf(".");
  const extention = fileName.slice(lastCommaIndex + 1);
  return extention;
}
