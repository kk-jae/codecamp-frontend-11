import { gql, useMutation } from "@apollo/client";

const CREATE_USED_ITEM = gql`
  mutation ($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export default function useMutationCreateUsedItem() {
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);

  return [createUsedItem];
}
