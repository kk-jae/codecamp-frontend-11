import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import CommentListUIPage from "./list.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./list.query";

export default function CommentListPage() {
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: "63dbb8a712e1f5002822a585",
    },
  });

  const [editContents, setEditContents] = useState("");
  const [editRating, setEditRating] = useState(0);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const onClickDeleteBoardComment = (event) => {
    const password = prompt("비밀번호를 입력하세요");

    const result = deleteBoardComment({
      variables: {
        password,
        boardCommentId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: "63dbb8a712e1f5002822a585" },
        },
      ],
    });
  };
  const [myIndex, setMyIndex] = useState(-1);

  const onClickSelectUpdateCreateBoardComment = (event) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  const UpdateCancel = () => {
    setMyIndex(-1);
  };

  // const [editContents, setEditContents] = useState("");
  // const [editRating, setEditRating] = useState("");

  const onChangEditContents = (event) => {
    setEditContents(event.currentTarget.value);
  };
  const onChangeEditRating = (event) => {
    setEditRating(Number(event.currentTarget.value));
    // console.log(editRating);
  };

  const onClickUpdateCreateBoardComment = async (event) => {
    const password = prompt("비밀번호를 입력하세요");
    const updateBoardCommentInput = {
      contents: editContents,
      rating: Number(editRating),
    };

    const result = await updateBoardComment({
      variables: {
        updateBoardCommentInput: updateBoardCommentInput,
        password: password,
        boardCommentId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: "63dbb8a712e1f5002822a585" },
        },
      ],
    });
    setMyIndex(-1);
  };

  return (
    <>
      <CommentListUIPage
        data={data}
        onClickDeleteBoardComment={onClickDeleteBoardComment}
        onClickUpdateCreateBoardComment={onClickUpdateCreateBoardComment}
        onClickSelectUpdateCreateBoardComment={
          onClickSelectUpdateCreateBoardComment
        }
        myIndex={myIndex}
        UpdateCancel={UpdateCancel}
        onChangEditContents={onChangEditContents}
        onChangeEditRating={onChangeEditRating}
      />
    </>
  );
}
