// 저장하고 싶은 게시글을 선택 후 el 전체를 배열로 브라우저(localStorage)에 저장합니다.
//  {baskets : el 전체}

import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import type {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickBasket = (basket: IBoard) => () => {
    // el이 basket 이름으로 들어옵니다 (이름 마음대로 바꿀 수 있음)
    // 1. 기존 장바구니 가져오기
    const baskets: IBoard[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    ); // 문자열로 변경한 baskets를 다시 JS 언어로 변경합니다. ( JSON.parse에 넣는 값은 항상 string 이여야 합니다.)

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("이미 담으신 물품입니다!!");
      return;
    }

    // 3. 내가 클릭한거 추가하기
    baskets.push(basket);

    // 4. 추가된 장바구니로 변경하기
    localStorage.setItem("baskets", JSON.stringify(baskets));
    // 배열 + 배열이라 이상하게 들어갑니다. JSON으로 문자열로 변경
  };

  // 만약 장바구니 페이지에서 가져오기도 만들고 싶다면....?
  // localStorage.getItem() => 프리렌더링시 에러 !!!
  // 그러면 어떻게?? useEffect 사용

  useEffect(() => {
    localStorage.getItem("baskets");
  }, []);

  // console.log(JSON.parse(localStorage.getItem("baskets")));

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}
