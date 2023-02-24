import { useMutation } from "@apollo/client";
import { useState, ChangeEvent, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import PortFolioCreateBoardsUI from "./BoardsWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardsWrite.queries";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import { PortFolioCreateBoardsProps } from "./BoardsWrite.type";
import { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function PortFolioCreateBoards(
  props: PortFolioCreateBoardsProps
) {
  //여기는 자바스크립트 쓰는 곳

  const [isActive, setIsActive] = useState(false);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const router = useRouter();

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState(" ");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [address, setAddress] = useState("");
  const [addressZipCode, setAddressZipCode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // API 에서 보내주는 url입니다. (googleapis에 적용하면 됩니다.)

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value) {
      setWriterError("");
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }

    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }

    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value) {
      setContentsError("");
    } else {
      setIsActive(false);
    }

    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    // 얕은 복사
    // fileUrls 가 배열의 형태이므로 하나씩 넣어주기 위해 스프레드 연산자 사용
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };
  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);
  // 추가적인 렌더링이 한번 더 일어나 불필요하지만, 코드 길이가 대폭 줄어 유지보수가 간편한 장점이 있습니다.
  // 이미지의 디폴트벨류 관리를 위한 코드 종료

  // if문을 분리해서 다시 진행
  const onClickContents = async () => {
    if (!writer) {
      setWriterError("이름을 입력해주세요.");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }

    if (!title) {
      setTitleError("제목을 입력해주세요");
    }

    if (!contents) {
      setContentsError("내용을 입력해주세요");
    }

    if (writer && password && title && contents) {
      try {
        // alert("게시글 등록이 완료되었습니다.");
        Modal.success({
          content: "게시물이 등록되었습니다.",
        });
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode: addressZipCode,
                address: address,
                addressDetail: addressDetail,
              },
              images: [...fileUrls],
            },
          },
        });
        router.push(`/homepage/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            content: error.message,
          });
      }
    }
  };

  const onClickUpdateBoard = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    try {
      const updateBoardInput: IUpdateBoardInput = {};
      if (title) updateBoardInput.title = title;
      // if (title !== "") {
      //   myVariables.title = title;
      // }
      if (contents) updateBoardInput.contents = contents;
      if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
      if (addressZipCode || address || addressDetail) {
        updateBoardInput.boardAddress = {};
        if (addressZipCode)
          updateBoardInput.boardAddress.zipcode = addressZipCode;
        if (address) updateBoardInput.boardAddress.address = address;
        if (addressDetail)
          updateBoardInput.boardAddress.addressDetail = addressDetail;
      }

      if (isChangedFiles) updateBoardInput.images = fileUrls;

      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput: updateBoardInput,
        },
      });

      // //  (addressZipCode);
      // router.push(`/homepage/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }

    // error가 Error의 인스턴스면 true를 반환합니다.
    // true 일경우 error.message를 반환합니다.
    // *인스턴스 : 함수의 기능(new Date() or Error 등)을 할당받은 변수
    // ex) let data = new Date() : data 는 new Date의 인스턴스입니다.
  };

  const [addressIsModalOpen, setAddressIsModalOpen] = useState(false);

  // const [address, setAddress] = useState("");
  // const [addressZipCode, setAddressZipCode] = useState("");
  // const [addressDetail, setAddressDetail] = useState("");

  // 주소 입력창 시작
  const AddressHandleComplete = (data: any) => {
    setAddressIsModalOpen(false);
    setAddressZipCode(data?.zonecode);
    setAddress(data?.address);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };
  // 주소 입력창 종료

  // 주소 입력창 모달 시작

  const AddressShowModal = () => {
    setAddressIsModalOpen((prev) => !prev);
  };

  const AddressHandleOk = () => {
    setAddressIsModalOpen(false);
  };

  const AddressHandleCancel = () => {
    setAddressIsModalOpen(false);
  };

  // 주소 입력창 모달 종료

  return (
    <PortFolioCreateBoardsUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickContents={onClickContents}
      onClickUpdateBoard={onClickUpdateBoard}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      // 주소 입력창 시작
      AddressHandleComplete={AddressHandleComplete}
      AddressShowModal={AddressShowModal}
      AddressHandleOk={AddressHandleOk}
      AddressHandleCancel={AddressHandleCancel}
      addressIsModalOpen={addressIsModalOpen}
      address={address}
      addressZipCode={addressZipCode}
      addressDetail={addressDetail}
      onChangeAddressDetail={onChangeAddressDetail}
      setAddressIsModalOpen={setAddressIsModalOpen}
      //주소 입력창 종료

      // 이미지 업로드

      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
