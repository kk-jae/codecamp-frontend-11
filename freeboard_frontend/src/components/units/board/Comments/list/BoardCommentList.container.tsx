// 무한 스크롤
// yarn add react-infinite-scroller
// yarn add --dev @types/react-infinite-scroller

import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import PortFolioQueryUI from "./BoardCommentList.presenter";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import type { MouseEvent } from "react";

export default function CreateBoardCommentList() {
  const router = useRouter();

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [CommentPassword, setCommentPassword] = useState("");

  const showModal = (event: ChangeEvent<HTMLImageElement>) => {
    setIsModalOpen(true);
    setBoardCommentId(event.target.id);
    setCommentPassword("");
  };

  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    try {
      await deleteBoardComment({
        variables: {
          password: CommentPassword,
          boardCommentId: boardCommentId,
        },

        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const loadFunc = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  // 댓글 수정하기 버튼 함수 시작

  // Edit GQL 시작
  const onClickUpdateBoardComment = async () => {};
  // Edit GQL 끝

  // Input 입력창 띄우기 시작
  const [myIndex, setMyIndex] = useState(-1);

  const onClickUpdateBoardCommentInputs = (
    event: MouseEvent<HTMLImageElement>
  ) => {
    setMyIndex(Number(event?.currentTarget.id));
  };

  // Input 입력창 띄우기 끝

  // 댓글 수정하기 버튼 함수 끝

  return (
    <PortFolioQueryUI
      data={data}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalOpen={isModalOpen}
      showModal={showModal}
      onChangeCommentPassword={onChangeCommentPassword}
      loadFunc={loadFunc}
      onClickUpdateBoardComment={onClickUpdateBoardComment}
      onClickUpdateBoardCommentInputs={onClickUpdateBoardCommentInputs}
      boardCommentId={boardCommentId}
      myIndex={myIndex}
      setMyIndex={setMyIndex}
    />
  );
}
