import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  CREATE_BOARD_COMMENT,
  LIKE_BOARD,
  DIS_LIKE_BOARD,
} from "./BoardsWrite.queries";
import PortFolioQueryUI from "./BoardsWrite.presenter";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import { ConsoleSqlOutlined } from "@ant-design/icons";

export default function PortFolioQueryContainer() {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DIS_LIKE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDisLikeCount] = useState(0);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
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
  };

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
  console.log(data);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickContents = async () => {
    router.push(`/homepage/${router.query.boardId}/edit`);
  };

  const onClickNewCreateBoard = async () => {
    router.push("/homepage/list");
  };

  const onClickDeleteBoard = async () => {
    deleteBoard({
      variables: { boardId: data?.fetchBoard._id },
    });
    router.push("/homepage/list");
    Modal.success({
      content: "게시물이 삭제되었습니다",
    });
    // alert("게시글이 삭제되었습니다.");
  };

  const onClickLikeBoard = async () => {
    likeBoard({
      variables: { boardId: data?.fetchBoard._id },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
    setLikeCount(Number(data?.fetchBoard.likeCount) + 1);
  };

  const onClickDisLikeBoard = async () => {
    dislikeBoard({
      variables: { boardId: data?.fetchBoard._id },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
    setDisLikeCount(Number(data?.fetchBoard.dislikeCount) + 1);
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
      onClickLikeBoard={onClickLikeBoard}
      onClickDisLikeBoard={onClickDisLikeBoard}

      // _id={data}
      // writer={data}
      // title={data}
      // contents={data}
      // youtubeUrl={data}
      // createdAt={data}
    />
  );
}
