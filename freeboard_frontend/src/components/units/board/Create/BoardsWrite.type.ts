import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface PortFolioCreateBoardsProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

export interface IPortFolioCreateBoardsUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickContents: () => void;
  onClickUpdateBoard: () => void;
  AddressHandleComplete: any;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  isEdit: boolean;
  isActive: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  addressZipCode: string;
  address: string;
  addressIsModalOpen: any;
  AddressHandleOk: () => void;
  AddressHandleCancel: () => void;
  AddressShowModal: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IProps {
  isActive: boolean;
  // isEdit:boolean;
}
