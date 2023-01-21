import PortFolioCreateBoards from "../../../../src/components/units/board/Create/BoardsWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      createdAt
    }
  }
`;

export default function PortFolioNew() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <PortFolioCreateBoards isEdit={true} data={data} />;
}
