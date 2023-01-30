// 05-03-query-moved/1

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
  // };
  // const onClickPage1 = (event: MouseEvent<HTMLSpanElement>): void => {
  // void refetch({ page: Number(event.currentTarget.id) });
  // currentTarget이 아니여도 무관합니다.
  // };
  // const onClickPage2 = (event: MouseEvent<HTMLSpanElement>): void => {
  // void refetch({ page: Number(event.currentTarget.id) });
  // refetchquery는 mutation과 query가 동시 작업이 필요할때 사용 (삭제, 등록 등)
  // };
  //
  // const onClickPage3 = (event: MouseEvent<HTMLSpanElement>): void => {
  // void refetch({ page: Number(event.currentTarget.id) });
  // };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        // fetchBoards에 타입을 주면 el은 자동으로 추론됩니다.
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
        (
          _, // el을 쓰지 않을래라는 표현입니다.
          index 
        ) => (
          <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </span>
        )
      )} */}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
        (
          el,
          index // 지금은 el과 index+1이 같은 값이다.index:el의 인덱스
        ) => (
          <span key={el} id={String(el)} onClick={onClickPage}>
            {el}
          </span>
        )
      )} */}

      {/* <span id="1" onClick={onClickPage1}>
        1
      </span>
      <span id="2" onClick={onClickPage2}>
        2
      </span>
      <span id="3" onClick={onClickPage3}>
        3
      </span> */}
    </div>
  );
}
