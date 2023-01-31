// 수정하기 여러개 클릭 가능

import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
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
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    const qqq = [...myIndex];
    // const qqq = myIndex;
    // qqq에 myIndex 자체를 복사했기 때문에 qqq에 값을 할당하면 원본값이 바뀌게 됩니다.
    qqq[Number(event.currentTarget.id)] = true;
    // 해당 코드에서 myIndex와 qqq가 true 이므로(원본과 복사본이 동일하므로),
    //  똑같은 처리로 인식되어 무시합니다.
    //  ==========예시========
    //  const [a, setA] = useState(1)
    //  setA(1) -->> 원본과 변경값이 동일하므로 작동하지 않음
    //  ==========예시========
    console.log(qqq);
    setMyIndex(qqq);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        !myIndex[index] ? (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <button onClick={onClickEdit} id={String(index)}>
              수정하기
            </button>
          </div>
        ) : (
          <input type="text" key={el._id} />
        )
      )}
    </div>
  );
}
