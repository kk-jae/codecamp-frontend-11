import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../src/commons/types/generated/types";
import { MouseEvent } from "react";
import { ApolloQueryResult } from "@apollo/client";

export interface IPaginations01Props {
  count?: number;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPaginations01UIProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickBoards: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
