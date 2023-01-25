//08-02 자료

import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";

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

  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    // alert(event.target.id);
    // 태그에 id값이 없는곳을 클릭하면 id가 없으므로 아무것도 출력되지 않습니다.

    alert(event.currentTarget.id); //currentTarget은 무조건여야 합니다.

    // 자식을 포함한 부모의 아무곳이나 클릭해도 id 값을 가져올 수 있습니다.

    // 부모와 자식에게 모두 서로 다른 onClick 함수가 있을경우, 자식의 onClick을 클릭하면 부모의 onClick까지 실행됩니다. (propagation:전파)
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={onClickAlert}>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
