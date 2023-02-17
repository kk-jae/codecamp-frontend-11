import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState", // 변수명
  default: true, // 초기값으로 들어가는 값
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});
