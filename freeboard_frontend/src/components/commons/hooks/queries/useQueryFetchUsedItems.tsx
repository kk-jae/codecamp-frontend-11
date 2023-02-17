import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

const FETCH_USED_ITEMS = gql`
  query {
    fetchUseditems {
      _id
      name
      remarks
      contents
      price
      images
      tags
      createdAt
    }
  }
`;

export const useQueryFetchUsedItems = () => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  return result;
};
