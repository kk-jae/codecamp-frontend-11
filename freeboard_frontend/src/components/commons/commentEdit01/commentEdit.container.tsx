import { useQuery, useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import CommentEditUI from "./commentEdit.presenter";
import { useState } from "react";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      writer
      contents
      rating
    }
  }
`;

export default function CommentEditPage(props) {
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

  const onChangeUpdateCommentPassword = (event) => {
    setUpdateCommentPassword(event?.target.value);
  };

  const onChangeUpdateCommentContents = (event) => {
    setUpdateCommentContents(event?.target.value);
  };

  // const onChangeUpdateCommentRating = (event) => {
  //   console.log(props.el.rating);
  //   // setUpdateCommentRating(Number(event?.target.value));
  // };

  // if (props.el.contents !== "")
  //   myVariables.updateBoardCommentInput.contents = props.el.contents;

  // if (title !== "") {
  //   myVariables.title = title;
  // }

  const onClickUpdateBoardComment = async (event) => {
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
