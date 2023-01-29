import { MouseEventHandler } from "react";

export interface IProtFolioQueryUI {
  onClickDeleteCommentShowModal:
    | (MouseEventHandler<HTMLAnchorElement> &
        MouseEventHandler<HTMLButtonElement>)
    | undefined;
  onClickDeleteComment: any;
  data?: any;
  isModalOpen: any;
  handleOk: any;
  handleCancel: any;
}
