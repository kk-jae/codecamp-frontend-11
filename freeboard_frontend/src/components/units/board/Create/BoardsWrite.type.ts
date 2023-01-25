import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";


export interface PortFolioCreateBoardsProps {
  isEdit: boolean;
  data?:Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

export interface IMyVariables {
  boardId: any;
  password: string;
  updateBoardInput: IUpdateBoardInput;
}

export interface IPortFolioCreateBoardsUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickContents: (event: MouseEvent<HTMLButtonElement>) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onClickUpdateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  isEdit: boolean;
  isActive: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IProps {
  isActive:boolean;
}