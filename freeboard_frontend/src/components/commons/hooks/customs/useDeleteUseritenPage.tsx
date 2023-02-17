import { gql, useMutation } from "@apollo/client";

const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useDeleteUserItemPage = () => {
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const onClickDeleteUserItem = (useditemId: string) => () => {
    const result = deleteUseditem({
      variables: {
        useditemId,
      },
    });
  };

  return {
    onClickDeleteUserItem,
  };
};
