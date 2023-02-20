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
      createdAt
    }
  }
`;

export const useQueryFetchUseditems = () => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  return query;
};
