// 05-03-query-moved/1

import { useQuery, gql, useMutation } from "@apollo/client";
import type {
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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
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

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  interface IPrev {
    __ref: string;
  }
  const onClickDelete = (boardId: string) => (): void => {
    void deleteBoard({
      variables: { boardId },
      // refetchQueries: [{ query: FETCH_BOARDS }], // 기존 방법

      update(cache, { data }) {
        cache.modify({
          // cache를 직접 수정합니다.
          fields: {
            // prev -> 이전값
            fetchBoards: (prev: IPrev[], { readField }) => {
              const deletedId = data.deleteBoard; // 삭제 완료된 ID
              const filterdPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filterdPrev]; // 삭제된ID를 제외한 나머지9개만 return
            },
          },
        });
      },
    });
  };

  const onClickSubmit = (): void => {
    void 나의함수({
      variables: {
        createBoardInput: {
          writer: "철수 룰루랄라",
          password: "1234",
          title: "제목입니다. 룰루랄라",
          contents: "내용입니다. 룰루랄라",
        },
      },
      // refetchQueries:[{query:FETCH_BOARDS}] // 기존 방법

      // {data} <== response
      update(cache, { data }) {
        cache.modify({
          fields: {
            // data.createBoard, //  {writer:"철수 룰루랄라"....}
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
              // prev -> 처음 로드된 fetchBoards
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
