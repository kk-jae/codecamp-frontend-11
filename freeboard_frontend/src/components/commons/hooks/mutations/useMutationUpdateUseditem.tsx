import { gql, useMutation } from "@apollo/client";

const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $useditemId: ID!
    $updateUseditemInput: UpdateUseditemInput!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

export default function useMutationUpdateUseditem() {
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM);

  return [updateUsedItem];
}
