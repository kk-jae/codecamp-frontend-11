import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
      createdAt
      likeCount
      images
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export const FETCH_BOARDS_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      images
      title
      writer
      likeCount
      createdAt
    }
  }
`;
