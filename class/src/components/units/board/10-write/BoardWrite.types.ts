import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean; //new, edit
  data?: any; // ?가 없으면 data가 없는 new 부분에서 에러가 발생합니다.
}

export interface IMyVariables {
  number: number;
  writer?: string; //나중에 추가되는 요소이기때문에 ? 가 필요합니다.
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  data: any;
}
