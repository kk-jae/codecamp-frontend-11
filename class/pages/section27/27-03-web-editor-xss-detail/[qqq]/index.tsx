import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.qqq },
  });

  return (
    <div>
      <div>작성자 : {data?.fetchBoard?.writer}</div>
      <div>제목 : {data?.fetchBoard?.title}</div>
      {/* <div>내용 : {data?.fetchBoard?.contents}</div> */}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard?.contents),
          }}
          // 꺽새가 출력되지 않게 문자 그대로를 적용합니다.
        />
      )}
    </div>
  );
}

// yarn add dompurify -> 웹에디터 해킹 방지 라이브러리

// mutation {
//   createBoard(createBoardInput: {
//     writer:"룰철루수랄라",
//     title:"안녕철수",
//     password:"123",
//     contents:"<img src='#' onerror='console.log( localStorage.getItem(\"accessToken\");' )/>"
//            이미지 에러 발생시 console에 accessToken을 띄어지게 합니다.
//   }) {
//     _id
//     contents
//   }
// }
