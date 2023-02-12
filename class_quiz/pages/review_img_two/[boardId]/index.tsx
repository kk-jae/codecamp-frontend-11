import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function DetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  console.log(data?.fetchBoard);

  return (
    <div>
      <div> 게시글 디테일</div>
      <img
        src={`https://storage.googleapis.com/${data?.fetchBoard.images[0]}`}
      />
    </div>
  );
}
