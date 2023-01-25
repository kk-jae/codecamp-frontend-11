import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS
} from "./BoardCommentWriter.queries";
import PortFolioQueryUI from "./BoardCommentWriter.presenter";
import { useState, ChangeEvent } from "react";

export default function CreateBoardCommentWriter(props: any) {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

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
    if (writer && password && contents) {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: 1,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [{ 
          query: FETCH_BOARD_COMMENTS, 
          variables:{boardId:router.query.boardId}, 
        },
      ],
      });
      // alert("댓글이 등록되었습니다.")
      // router.push(`/homework/${router.query.boardId}`);
      setWriter("");
      setPassword("");
      setContents("");
    } else {
      alert("작성자, 비밀번호, 내용을 모두 입력해주세요");
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
    />
  );
}
