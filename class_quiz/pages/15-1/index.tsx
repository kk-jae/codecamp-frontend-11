import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";

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

const FETCH_BOARDS_COUNTER = gql`
  query {
    fetchBoardsCount
  }
`;
const Btn = styled.button`
  background-color: white;
  border: none;

  :focus {
    color: red;
  }
`;

export default function PageNation(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNTER);

  const lastPage = Math.ceil((dataBoardCount?.fetchBoardsCount ?? 10) / 10);
  // type에러를 해결하기 위해 ?? 10을 추가하였습니다. (api통해 받아오기 전에는 언디파인드이므로 언디파인드일때 값을 임의로 만들어 놓습니다.)
  const [startPage, setStartPage] = useState(1);

  const onClickBoards = (event: MouseEvent<HTMLButtonElement>): void => {
    refetch({ page: Number(event?.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    if (startPage == 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <span style={{ margin: "10px" }}>{el.title}</span>
          </div>
        ))}
      </div>
      <button
        onClick={onClickPrevPage}
        disabled={startPage === 1 ? true : false}
      >
        ◁
      </button>
      {new Array(10).fill(1).map(
        (el, index) =>
          index + startPage <= lastPage && (
            <Btn
              key={index + 1}
              style={{
                margin: "5px",
              }}
              onClick={onClickBoards}
              id={String(index + startPage)}
            >
              {index + startPage}
            </Btn>
          )
      )}
      <button
        onClick={onClickNextPage}
        disabled={startPage + 10 <= lastPage ? false : true}
      >
        ▷
      </button>
    </div>
  );
}
