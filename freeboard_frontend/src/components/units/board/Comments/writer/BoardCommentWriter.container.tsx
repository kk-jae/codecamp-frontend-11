import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentWriter.queries";
import PortFolioQueryUI from "./BoardCommentWriter.presenter";
import { useState, ChangeEvent } from "react";
import { Modal } from "antd";

export default function CreateBoardCommentWriter(props: any) {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rate, setRate] = useState(3);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickCreateBoardComment = async () => {
    try {
      if (writer && password && contents) {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating: rate,
            },
            boardId: router.query.boardId,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        setWriter("");
        setPassword("");
        setContents("");
      } else {
        Modal.error({
          content: "작성자, 비밀번호, 내용을 모두 입력해주세요",
        });
        // else {
        //   alert("작성자, 비밀번호, 내용을 모두 입력해주세요");
      }
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return (
    <PortFolioQueryUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickCreateBoardComment={onClickCreateBoardComment}
      writer={writer}
      password={password}
      contents={contents}
      rate={rate}
      setRate={setRate}
      // desc={desc}
    />
  );
}
