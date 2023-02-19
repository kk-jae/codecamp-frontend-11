import { gql, useMutation } from "@apollo/client";

const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

export default function useMutationUseditemQuestion() {
  const [createUsedItemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  return [createUsedItemQuestion];
}
