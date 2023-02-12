import { gql } from "@apollo/client";
export const BEST_ITEM = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      images
      likeCount
    }
  }
`;
