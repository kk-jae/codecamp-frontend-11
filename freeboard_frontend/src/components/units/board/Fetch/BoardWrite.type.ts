import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";

export interface IProtFolioQueryUI {
  data?: Pick<IQuery, "fetchBoard">;
  onClickContents: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickNewCreateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateBoardComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickLikeBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDisLikeBoard: (event: MouseEvent<HTMLButtonElement>) => void;
}
