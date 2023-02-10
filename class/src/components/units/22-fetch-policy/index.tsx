import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

// 22-01-fetch-policy 에서 이미 FETCH_BOARDS를 조회했기때문에
// 해당 페이지에서는 다시 백엔드에 접근하지 않고 데이터를 가져옵니다. (캐싱)

// 캐싱 작업이 원치 않으면(계속 백엔드 요청을 받을거면),
// fetchPolicy : "network-only" 적용 (이전에 받은 fetch에 없는 자료가 있을 때 활용 가능)
// 상위에서 contents가 없었기때문에 필요하면 fetchPolicy:"network-only" 적용

export default function FetchPolicyExample(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      fetchPolicy: "network-only",
    }
  );

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
