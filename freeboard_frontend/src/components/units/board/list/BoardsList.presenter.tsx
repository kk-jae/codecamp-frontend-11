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
import SearchContentsComponent from "../../../commons/searchContents";

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
          <S.SearchContents>
            <S.SearchContents_input onChange={props.onChangeSearchContents} />
            <S.SearchContents_button>검색</S.SearchContents_button>
          </S.SearchContents>
          <S.CreateNewBoard onClick={props.onClickNewCreateBoard}>
            <img src="../BoardPage/List_newBoard.png" alt="게시글등록"></img>
            게시물 등록하기
          </S.CreateNewBoard>
        </S.Container_top>
        <S.Wrapper>
          <S.Contents>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.loadFunc}
              hasMore={true}
            >
              <S.List_Container>
                {props.data?.fetchBoards.map((el, index) => (
                  <S.List_Item onClick={props.onClickMovedBoard} id={el._id}>
                    <S.Item_Top>
                      <S.Top_img
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                        alt="이미지가 없습니다"
                      />
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
              </S.List_Container>
            </InfiniteScroll>
            <S.Wrapper_footer>
              {/* 페이지 네이션 시작 */}
              {/* <Paginations01 refetch={props.refetch} count={props.count} /> */}
              {/* 페이지 네이션 종료 */}
            </S.Wrapper_footer>
          </S.Contents>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
