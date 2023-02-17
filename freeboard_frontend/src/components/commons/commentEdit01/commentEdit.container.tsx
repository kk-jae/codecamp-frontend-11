import { useQuery, useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import CommentEditUI from "./commentEdit.presenter";
import { useState } from "react";
import type { ChangeEvent } from "react";
import {
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./commentEdit.queries";
import { Modal } from "antd";
import { IPropsCommentEditPage } from "./commentEdit.types";

export default function CommentEditPage(props: IPropsCommentEditPage) {
  const router = useRouter();

  // const { data } = useQuery(FETCH_BOARD_COMMENTS, {
  //   variables: {
  //     boardId:
  //   }
  // });

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [updateCommentPassword, setUpdateCommentPassword] = useState("");
  const [updateCommentContents, setUpdateCommentContents] = useState("");
  const [updateCommentRating, setUpdateCommentRating] = useState(
    props.el.rating
  );

  // const {date} = useQuery(FETCH_BOARD_COMMENTS)

  const onChangeUpdateCommentPassword = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setUpdateCommentPassword(event?.target.value);
  };

  const onChangeUpdateCommentContents = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUpdateCommentContents(event?.target.value);
  };

  // const onChangeUpdateCommentRating = (event) => {
  //   // console.log(props.el.rating);
  //   // setUpdateCommentRating(Number(event?.target.value));
  // };

  // if (props.el.contents !== "")
  //   myVariables.updateBoardCommentInput.contents = props.el.contents;

  // if (title !== "") {
  //   myVariables.title = title;
  // }

  const onClickUpdateBoardComment = async () => {
    try {
      const updateBoardCommentInput = {
        contents: updateCommentContents,
        rating: updateCommentRating,
      };

      if (updateCommentContents == "") {
        updateBoardCommentInput.contents = props.el.contents;
      }
      if (updateCommentRating == "") {
        updateBoardCommentInput.rating = props.el.rating;
      }

      const result = await updateBoardComment({
        variables: {
          boardCommentId: props.el._id,
          password: updateCommentPassword,
          updateBoardCommentInput: updateBoardCommentInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setMyIndex(-1);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  const onClickCencel = () => {
    props.setMyIndex(true);
  };

  return (
    <div>
      <CommentEditUI
        onClickUpdateBoardComment={onClickUpdateBoardComment}
        onChangeUpdateCommentPassword={onChangeUpdateCommentPassword}
        onChangeUpdateCommentContents={onChangeUpdateCommentContents}
        // onChangeUpdateCommentRating={onChangeUpdateCommentRating}
        setUpdateCommentRating={setUpdateCommentRating}
        onClickCencel={onClickCencel}
        el={props.el}
        myIndex={props.myIndex}
      />
    </div>
  );
}
