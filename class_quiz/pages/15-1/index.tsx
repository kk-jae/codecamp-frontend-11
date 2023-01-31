import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";
import BoardListPage from "../../src/components/units/boardList";
import PaginationPage from "../../src/components/units/product/commons/pagination";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNTER = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PageNation(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNTER);

  const lastPage = Math.ceil((dataBoardCount?.fetchBoardsCount ?? 10) / 10);
  // type에러를 해결하기 위해 ?? 10을 추가하였습니다. (api통해 받아오기 전에는 언디파인드이므로 언디파인드일때 값을 임의로 만들어 놓습니다.)

  return (
    <>
      <BoardListPage data={data} />
      <PaginationPage refetch={refetch} lastPage={lastPage} />
    </>
  );
}
