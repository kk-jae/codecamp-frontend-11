import { useState } from "react";
import styled from "@emotion/styled";
import type { MouseEvent } from "react";
import type { ApolloQueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../../../src/commons/types/generated/types";

const Btn = styled.button`
  background-color: white;
  border: none;
`;
interface IPaginationProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  lastPage: number;
}

export default function PaginationPage(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);

  const onClickBoards = (event: MouseEvent<HTMLButtonElement>): void => {
    void props.refetch({ page: Number(event?.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    if (startPage == 1) return;
    setStartPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= props.lastPage) {
      setStartPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      <Btn onClick={onClickPrevPage} disabled={startPage === 1 ? true : false}>
        ◁
      </Btn>
      {new Array(10).fill(1).map(
        (el, index) =>
          index + startPage <= props.lastPage && (
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
      <Btn
        onClick={onClickNextPage}
        disabled={startPage + 10 <= props.lastPage ? false : true}
      >
        ▷
      </Btn>
    </div>
  );
}
