import { gql, useQuery } from "@apollo/client";
import Router, { useRouter } from "next/router";
import { useState } from "react";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function FetchImgPage() {
  const router = useRouter();
  const [imgUrl, setImgUrl] = useState("");

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  console.log(data);

  const onClickMoveCreateBoard = () => {
    router.push("/review_imageUpload/create");
  };

  console.log(data?.fetchBoard.images);

  return (
    <div>
      <div>
        <div>게시글 상세보기</div>
        <div>작성자 :{data?.fetchBoard.writer} </div>
        <div>제목 :{data?.fetchBoard.title}</div>
        <div>내용 :{data?.fetchBoard.contents}</div>
        <div>
          이미지 :{" "}
          <img
            src={`https://storage.googleapis.com/${data?.fetchBoard.images}`}
          />
        </div>
        <button onClick={onClickMoveCreateBoard}>등록으로 돌아가기</button>
      </div>
    </div>
  );
}
