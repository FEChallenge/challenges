import { atom } from "recoil";

export const picturesState = atom<File[]>({
  key: "picturesState",
  default: [],
});
