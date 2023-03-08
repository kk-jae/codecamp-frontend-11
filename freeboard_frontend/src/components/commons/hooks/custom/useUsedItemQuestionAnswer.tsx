import { async } from "@firebase/util";
import { useMutationCreateUseditemQuestionAnswer } from "../mutation/useMutationCreateUseditemQuestionAnswer";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  useQueryFetchUseditemQuestionAnswers,
} from "../query/useQueryFetchUseditemQuestionAnswers";
import { useQueryFetchUsedItemQuestions } from "../query/useQueryFetchUsedItemQuestions";
import { useQueryIdChecker } from "./useQueryIdChecker";

export default function UsedItemQuestionAnswer() {
  const [createUseditemQuestionAnswer] =
    useMutationCreateUseditemQuestionAnswer();
  const { id } = useQueryIdChecker("usedItem");
  const { dataQuery } = useQueryFetchUsedItemQuestions(id);

  const onClickUsedItemQuestionAnswer =
    (index: number) => async (data: any) => {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
          useditemQuestionId: dataQuery?.fetchUseditemQuestions[index]._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: dataQuery?.fetchUseditemQuestions[index]._id,
            },
          },
        ],
      });
    };

  return { onClickUsedItemQuestionAnswer };
}
