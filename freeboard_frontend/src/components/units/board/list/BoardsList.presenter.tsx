import * as S from "./BoardsList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import Paginations01 from "../../../commons/paginations/Paginations01.container";
import { ApolloQueryResult } from "@apollo/client";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";

interface IBoardsListContainerUIProps {
  data: Pick<IQuery, "fetchBoards">;
  onClickNewCreateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMovedBoard: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}

export default function BoardsListContainerUI(
  props: IBoardsListContainerUIProps
) {
  return (
    <>
      <S.Container>
        <S.Container_top>
          {/* <S.Top_PageNations> */}
          {/* 페이지 네이션 시작 */}
          {/* <Paginations01 refetch={props.refetch} count={props.count} /> */}
          {/* 페이지 네이션 종료 */}
          {/* </S.Top_PageNations> */}
        </S.Container_top>
        <S.Wrapper>
          <S.Contents>
            <S.List_Container>
              {/* <InfiniteScroll
                  pageStart={0}
                  loadMore={props.loadFunc}
                  hasMore={true}
                > */}
              {props.data?.fetchBoards.map((el) => (
                <S.List_Item onClick={props.onClickMovedBoard} id={el._id}>
                  <S.Item_Top>
                    <S.Top_img src="/pushoff.jpg" alt="이미지" />
                  </S.Item_Top>
                  <S.Item_Bottom>
                    <S.Right_Bottom>
                      <S.Bottom_writer>{el.writer}</S.Bottom_writer>
                      <S.Bottom_title>{el.title}</S.Bottom_title>
                    </S.Right_Bottom>
                    <S.Right_right></S.Right_right>
                  </S.Item_Bottom>
                </S.List_Item>
              ))}
              {/* </InfiniteScroll> */}
            </S.List_Container>
            {/* <S.Wrapper_footer> */}
            {/* 페이지 네이션 시작 */}
            {/* <Paginations01 refetch={props.refetch} count={props.count} /> */}
            {/* 페이지 네이션 종료 */}
            {/* <S.CreateNewBoard onClick={props.onClickNewCreateBoard}>
                <img
                  src="../BoardPage/List_newBoard.png"
                  alt="게시글등록"
                ></img>
                게시물 등록하기
              </S.CreateNewBoard> */}
            {/* </S.Wrapper_footer> */}
          </S.Contents>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
