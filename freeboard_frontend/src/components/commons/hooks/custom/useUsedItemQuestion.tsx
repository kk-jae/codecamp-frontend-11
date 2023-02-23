import { useState } from "react";
import { useMutationCreateUseditemQuestion } from "../mutation/useMutationCreateUseditemQuestion";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useQueryFetchUsedItemQuestions";
import { useQueryIdChecker } from "./useQueryIdChecker";

export default function UsedItemQuestion(args: string) {
  const [createUseditemQuestion] = useMutationCreateUseditemQuestion();
  const { id } = useQueryIdChecker("usedItem");

  const onClickCreateUsedItemQuestion = async (data: any) => {
    const result = await createUseditemQuestion({
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
  };

  return { onClickCreateUsedItemQuestion };
}
