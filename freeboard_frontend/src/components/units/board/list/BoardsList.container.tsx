import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardsList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardsListContainerUI from "./BoardsList.presenter";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export default function BoardsListContainer(): JSX.Element {
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickNewCreateBoard = (): void => {
    void router.push("/homepage/new");
  };

  const onClickMovedBoard = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(`/homepage/${event.currentTarget.id}`);
    // console.log(event.currentTarget.id);
  };

  return (
    <BoardsListContainerUI
      data={data}
      onClickNewCreateBoard={onClickNewCreateBoard}
      onClickMovedBoard={onClickMovedBoard}
      refetch={refetch}
      count={dataBoardCount?.fetchBoardsCount}
    />
  );
}
