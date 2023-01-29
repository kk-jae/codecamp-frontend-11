import { ChangeEvent, MouseEvent } from "react";
import { Dispatch, SetStateAction } from "react";

export interface IProtFolioQueryUI {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCreateBoardComment: (event: MouseEvent<HTMLButtonElement>) => void;
  writer: string;
  password: string;
  contents: string;
  rate: number;
  setRate: Dispatch<SetStateAction<number>>;
}
