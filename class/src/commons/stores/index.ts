import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState", // 변수명
  default: true, // 초기값으로 들어가는 값
});
