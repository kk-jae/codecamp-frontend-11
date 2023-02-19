import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../../commons/types/generated/types";

const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const useDeleteUserItemPage = () => {
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  return [deleteUseditem];
};
