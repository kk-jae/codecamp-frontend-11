import { useMutation } from "@apollo/client";
import { useState } from "react";
import CommentWriterUIPage from "./writer.presenter";
import { CREATE_BOARD_COMMENT } from "./writer.query";
import { FETCH_BOARD_COMMENTS } from "../list/list.query";

export default function CommentWritePage(): JSX.Element {
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const onChangeWriter = (event) => {
    setWriter(event.currentTarget.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onChangeContents = (event) => {
    setContents(event.currentTarget.value);
  };
  const onChangeRating = (event) => {
    setRating(event.currentTarget.value);
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
        boardId: "63dbb8a712e1f5002822a585",
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: "63dbb8a712e1f5002822a585" },
        },
      ],
    });
  };

  return (
    <>
      <CommentWriterUIPage
        onClickCreateBoardComment={onClickCreateBoardComment}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onChangeRating={onChangeRating}
      />
    </>
  );
}
