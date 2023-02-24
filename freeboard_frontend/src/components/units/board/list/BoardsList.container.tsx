import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardsList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardsListContainerUI from "./BoardsList.presenter";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import type { ChangeEvent, MouseEvent } from "react";
import _ from "lodash";
import { List_Item } from "./BoardsList.styles";
import { useState } from "react";

export default function BoardsListContainer(): JSX.Element {
  const router = useRouter();

  const { data, refetch, fetchMore } = useQuery<
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
  };

  const loadFunc = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    // 계속 onChangeSearch 가 실행되다가 0.5초 동안 아무동작도 없을때 refetch 실행
  }, 500);

  const onChangeSearchContents = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    // setSearch(event.currentTarget.value);
    getDebounce(event.currentTarget.value);

    // void refetch({ search: event.currentTarget.value, page: 1 });
  };

  return (
    <BoardsListContainerUI
      data={data}
      onClickNewCreateBoard={onClickNewCreateBoard}
      onClickMovedBoard={onClickMovedBoard}
      refetch={refetch}
      count={dataBoardCount?.fetchBoardsCount}
      loadFunc={loadFunc}
      onChangeSearchContents={onChangeSearchContents}
    />
  );
}
