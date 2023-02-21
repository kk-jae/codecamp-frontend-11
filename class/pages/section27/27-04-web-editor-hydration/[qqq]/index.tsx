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
      <div style={{ color: "red" }}>작성자 : {data?.fetchBoard?.writer}</div>
      <div style={{ color: "green" }}>제목 : {data?.fetchBoard?.title}</div>
      {/* <div>내용 : {data?.fetchBoard?.contents}</div> */}
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard?.contents),
          }}
        />
      ) : (
        <div style={{ color: "blue" }} />
      )}
      {/* 프리렌더링 진행시 html만 읽으면서 blue가 아닌 brown으로 인식합니다. 그래서 중간에 빈태그로 blue를 인식시켜줍니다 */}
      <div style={{ color: "brown" }}>주소 : 구로구</div>
    </div>
  );
}

// yarn add dompurify -> 웹에디터 해킹 방지 라이브러리
