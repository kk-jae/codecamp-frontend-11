//05-03-query-moved/1

import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    # fetchBoard(number: 1)
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  // console.log(data)
  console.log(data?.fetchBoards);
  //받아오는 숫자(length)는 백엔드에서 조정할 수 있습니다.

  // CSS 적용방법 시작
  // const myStyles = {
  //   margin : "10px",
  // }
  // CSS 적용방법 종료

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
