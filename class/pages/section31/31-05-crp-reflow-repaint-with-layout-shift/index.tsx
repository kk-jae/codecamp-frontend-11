import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import type { MouseEvent } from "react";

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

export default function StaticRoutingMovedPage(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <div>
      {(data?.fetchBoards ?? new Array(10).fill(1)).map((el) => (
        // fetchBoards에 타입을 주면 el은 자동으로 추론됩니다.
        <div key={el._id} style={{ height: "30px" }}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}

// 페이지네이션이 맨위에 먼저 렌더링되고 이후 게시글의 영역이 추가되어 페이지네이션이 아래로 내려가게됩니다.
// 이러한 현상이 반복되면 페이지가 계속 아래로 내려가는 불필요한 현상이 발생하게 됩니다.
