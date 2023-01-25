import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
import Checkbox from "../11-02-stop-propagation/checkbox";

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

  // const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
  //   alert(event.currentTarget.id); //currentTarget은 무조건여야 합니다.
  // };

  const qqq1 = () => {
    alert("1번 클릭");
  };
  // const qqq2 = () => {
  //   alert("2번 클릭");
  // };
  // const qqq3 = (event) => {
  //   event.stopPropagation();
  //   // event.stopPropagation()이 없을경우 3번의 부모태그인 2번클릭, 1번클릭 모두 동작합니다.
  //   alert("3번 클릭");
  // };
  const qqq4 = (event: any) => {
    event.stopPropagation();
    alert("4번 클릭");
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={qqq1}>
          <Checkbox />
          {/* import해서 가져오는 경우에도 자식에 들어가게 된다면, 
          클릭기능에 반드시 event.stopPropagation을 놓치지 않고 작성해야 합니다. */}

          {/* <span onClick={qqq2}><input type="checkbox" onClick={qqq3} /></span> */}

          <span style={{ margin: "10px" }} onClick={qqq4}>
            {el.number}
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
