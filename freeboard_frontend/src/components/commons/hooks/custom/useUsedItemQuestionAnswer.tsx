import { async } from "@firebase/util";
import { useMutationCreateUseditemQuestionAnswer } from "../mutation/useMutationCreateUseditemQuestionAnswer";
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
      });
      console.log(data.contents);
      console.log(dataQuery?.fetchUseditemQuestions[index]._id);
      console.log(result);
    };
  return { onClickUsedItemQuestionAnswer };
}
