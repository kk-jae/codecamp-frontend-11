import { useState } from "react";
import { useMutationCreateUseditemQuestion } from "../mutation/useMutationCreateUseditemQuestion";
import { useMutationCreateUseditemQuestionAnswer } from "../mutation/useMutationCreateUseditemQuestionAnswer";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useQueryFetchUsedItemQuestions";

export default function UsedItemQuestion(args: string) {
  const [createUseditemQuestion] = useMutationCreateUseditemQuestion();
  const [createUseditemQuestionAnswer] =
    useMutationCreateUseditemQuestionAnswer();

  const [questionId, setQuestionId] = useState("");

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
    setQuestionId(
      result.data?.createUseditemQuestion._id
        ? result.data?.createUseditemQuestion._id
        : ""
    );
  };

  const onClickUsedItemQuestionAnswer = async () => {
    const result = await createUseditemQuestionAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents: "룰루랄라",
        },
        useditemQuestionId: questionId,
      },
    });
    console.log(result);
  };
  return { onClickCreateUsedItemQuestion, onClickUsedItemQuestionAnswer };
}
