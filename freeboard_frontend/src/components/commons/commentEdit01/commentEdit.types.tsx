import { RateProps } from "antd";
import { ChangeEvent, MouseEvent } from "react";

export interface IPropsCommentEditPage {
  onClickUpdateBoardComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeUpdateCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeUpdateCommentContents: (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => void;
  setUpdateCommentRating: React.ForwardRefExoticComponent<
    RateProps & React.RefAttributes<unknown>
  >;
  onClickCencel: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  el: any;
  myIndex: number;
  setMyIndex: any;
}
