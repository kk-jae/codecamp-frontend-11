import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import PortFolioQueryUI from "./BoardCommentList.presenter";
import { ChangeEvent} from "react";

export default function CreateBoardCommentList() {
  const router = useRouter();

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  })

  

  const onClickDeleteComment = (event: ChangeEvent<HTMLImageElement>) => {
    const password = prompt("비밀번호를 입력해주세요")
    console.log(password);

    deleteBoardComment({
      variables: {
        password: password,
        boardCommentId: event.target.id,
      },

      refetchQueries: [{ 
        query: FETCH_BOARD_COMMENTS, 
        variables:{boardId:router.query.boardId}, 
      },
    ],
    });
  };
  return (
    <PortFolioQueryUI
      onClickDeleteComment={onClickDeleteComment}
      data={data}
    />
  );
}
