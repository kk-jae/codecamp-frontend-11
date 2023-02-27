import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

const FETCH_USER_LOGGEIN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
      picture
      # userPoint {
      #   _id
      #   amount
      #   user
      #   createdAt
      #   updatedAt
      #   deletedAt
      # }
    }
  }
`;

export default function useQueryfetchUserLoggeIn() {
  const query = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEIN);

  return query;
}
