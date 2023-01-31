// 무한 스크롤
// yarn add react-infinite-scroller
// yarn add --dev @types/react-infinite-scroller

import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import PortFolioQueryUI from "./BoardCommentList.presenter";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";

export default function CreateBoardCommentList() {
  const router = useRouter();

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
        console.log(fetchMoreResult);
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

  return (
    <PortFolioQueryUI
      data={data}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalOpen={isModalOpen}
      showModal={showModal}
      onChangeCommentPassword={onChangeCommentPassword}
      loadFunc={loadFunc}
    />
  );
}
