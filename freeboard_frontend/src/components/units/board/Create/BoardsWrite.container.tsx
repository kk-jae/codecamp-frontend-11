import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import PortFolioCreateBoardsUI from "./BoardsWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardsWrite.queries";
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

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const router = useRouter();

  const [address, setAddress] = useState("");
  const [addressZipCode, setAddressZipCode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

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
              password, //value 생략 가능
              title, //value 생략 가능
              contents,
              //키와 value가 동일하면 value 생략 가능합니다. (shorthand-property)
              youtubeUrl,
              boardAddress: {
                zipcode: addressZipCode,
                address: address,
                addressDetail: addressDetail,
              },
            },
          },
        });
        router.push(`/homework/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            content: error.message,
          });
      }
    }
  };

  const onClickUpdateBoard = async () => {
    try {
      const updateBoardInput: IUpdateBoardInput = {};
      if (title) updateBoardInput.title = title;
      // if (title !== "") {
      //   myVariables.title = title;
      // }
      if (contents) updateBoardInput.contents = contents;
      if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;

      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput: updateBoardInput,
        },
      });

      // router.push(`/homework/${result.data?.updateBoard._id}`);
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
    console.log(addressIsModalOpen);

    // console.log(addressIsModalOpen);
  };

  const AddressHandleOk = () => {
    setAddressIsModalOpen(false);
  };

  const AddressHandleCancel = () => {
    setAddressIsModalOpen(false);
    console.log(addressIsModalOpen);
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
    />
  );
}
