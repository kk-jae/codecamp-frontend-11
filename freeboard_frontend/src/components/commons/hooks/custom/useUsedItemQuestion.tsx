import { message, Modal } from "antd";
import { useState } from "react";
import { isMethodDeclaration } from "typescript";
import { useMutationCreateUseditemQuestion } from "../mutation/useMutationCreateUseditemQuestion";
import useMutationDeleteUseditemQuestion from "../mutation/useMutationDeleteUseditemQuestion";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useQueryFetchUsedItemQuestions";
import { useQueryIdChecker } from "./useQueryIdChecker";

export default function UsedItemQuestion(args: string) {
  const [createUseditemQuestion] = useMutationCreateUseditemQuestion();
  const [deleteUseditemQuestion] = useMutationDeleteUseditemQuestion();
  const { id } = useQueryIdChecker("usedItem");

  const onClickCreateUsedItemQuestion = async (data: any) => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: args,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: args },
          },
        ],
      });
      Modal.success({
        content: "댓글이 등록되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const onClickDeleteUsedItemQuestion =
    (useditemQuestionId: string) => async () => {
      try {
        await deleteUseditemQuestion({
          variables: {
            useditemQuestionId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: { useditemId: args },
            },
          ],
        });
        Modal.success({
          content: "댓글이 삭제되었습니다.",
        });
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({
            content: error.message,
          });
        }
      }
    };

  return { onClickCreateUsedItemQuestion, onClickDeleteUsedItemQuestion };
}
