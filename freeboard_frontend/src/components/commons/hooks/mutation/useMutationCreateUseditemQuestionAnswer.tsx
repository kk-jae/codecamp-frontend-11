import { gql, useMutation } from "@apollo/client";

const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;

export const useMutationCreateUseditemQuestionAnswer = () => {
  const mutation = useMutation(CREATE_USED_ITEM_QUESTION_ANSWER);

  return mutation;
};
