import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  // console.log(router);
  // router.query.qqq 값 확인

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.qqq) },
  });

  console.log(data);

  return (
    <div>
      <div>{router.query.qqq}번 게시글 이동이 완료되었습니다.</div>
      <div>작성자 : {data?.fetchBoard?.writer}</div>
      {/* 없을때 조건 추가 : {data?.fetchBoard.writer : "data가 로딩중입니다!!"}  -> data가 들어오면 출력합니다.*/}
      {/* 1차 수정 : {data && data.fetchBoard.writer}*/}
      {/* 수정전 : {data.fetchBoard.writer}*/}
      <div>제목 : {data?.fetchBoard?.title}</div>
      <div>내용 : {data?.fetchBoard?.contents}</div>
      {/* 자바스크립트에서의 변수를 HTML 문서로 가져오려면 중괄호로 감싸줘야합니다. */}
      {/* && 사용 이유 : data가 있다면 fetchBoard.writer를 출력하고 없으면 아직 출력하지마라*/}
      {/* (data가 true 일때 출력) - HTML 먼저 출력시키므로 비동기입니다. */}
      {/* 2차 수정까지 진행 - 욥셔널 체이닝(optional-chaining) */}
    </div>
  );
}
