import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardsList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardsListContainerUI from "./BoardsList.presenter";
import { useState, MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardsListContainer() {
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardCount?.fetchBoardsCount ?? 10) / 10); // type에러를 해결하기 위해 ?? 10을 추가하였습니다. (api통해 받아오기 전에는 언디파인드이므로 언디파인드일때 값을 임의로 만들어 놓습니다.)
  const [startPage, setStartPage] = useState(1);

  const onClickBoards = (event: MouseEvent<HTMLButtonElement>): void => {
    void refetch({ page: Number(event?.currentTarget.id) });
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

  const onClickNewCreateBoard = async () => {
    router.push("/homework/new");
  };

  const onClickMovedBoard = async (event: any) => {
    router.push(`/homework/${event.target.id}`);
  };

  return (
    <BoardsListContainerUI
      data={data}
      onClickNewCreateBoard={onClickNewCreateBoard}
      onClickMovedBoard={onClickMovedBoard}
      lastPage={lastPage}
      startPage={startPage}
      onClickBoards={onClickBoards}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    ></BoardsListContainerUI>
  );
}
