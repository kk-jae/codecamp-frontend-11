import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  CREATE_BOARD_COMMENT,
} from "./BoardsWrite.queries";
import PortFolioQueryUI from "./BoardsWrite.presenter";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { useState, ChangeEvent } from "react";

export default function PortFolioQueryContainer() {
  const router = useRouter();
  // console.log(router);
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

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
    // console.log(event.target.value.length);
  };

  const onClickCreateBoardComment = async () => {
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
    });
    console.log(result);
  };

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
  // console.log(data);
  // console.log(router);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickContents = async () => {
    router.push(`/homework/${router.query.boardId}/edit`);
  };

  const onClickNewCreateBoard = async () => {
    router.push("/homework/list");
  };

  const onClickDeleteBoard = async () => {
    deleteBoard({
      variables: { boardId: data?.fetchBoard._id },
    });
    router.push("/homework/list");
    alert("게시글이 삭제되었습니다.");
  };

  return (
    <PortFolioQueryUI
      data={data}
      onClickContents={onClickContents}
      onClickNewCreateBoard={onClickNewCreateBoard}
      onClickDeleteBoard={onClickDeleteBoard}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickCreateBoardComment={onClickCreateBoardComment}
      // _id={data}
      // writer={data}
      // title={data}
      // contents={data}
      // youtubeUrl={data}
      // createdAt={data}
    />
  );
}
