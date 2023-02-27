import * as S from "./BoardsList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import Paginations01 from "../../../commons/paginations/Paginations01.container";
import { ApolloQueryResult } from "@apollo/client";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { uuidv4 } from "@firebase/util";
import { LikeOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";

interface IBoardsListContainerUIProps {
  data: Pick<IQuery, "fetchBoards">;
  onClickNewCreateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMovedBoard: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
  onChangeSearchContents: (event: ChangeEvent<HTMLInputElement>) => void;
  loadFunc: any;
  dataBoardBest: any;
}

export default function BoardsListContainerUI(
  props: IBoardsListContainerUIProps
) {
  return (
    <>
      <S.Container>
        <S.BestItemMainTitle>베스트 게시글</S.BestItemMainTitle>
        <S.BestItem>
          {props.dataBoardBest?.fetchBoardsOfTheBest.map(
            (el: any, index: number) => (
              <S.ItemWrapper key={index}>
                <S.BestItemImg
                  src={
                    el.images[0]
                      ? `https://storage.googleapis.com/${el.images[0]}`
                      : "/기본이미지.png"
                  }
                  alt="??"
                />
                <S.BestItemText>
                  <S.TextTop>
                    <S.BestItemTitle>{el.title}</S.BestItemTitle>
                  </S.TextTop>
                  <S.TextBottom>
                    <S.Bottom_Left>
                      <S.BestItemWriter>
                        <UserOutlined /> {el.writer}
                      </S.BestItemWriter>
                      <S.BestItemCreatedAt>
                        {getDate(el.createdAt)}
                      </S.BestItemCreatedAt>
                    </S.Bottom_Left>
                    <S.Bottom_Right>
                      <S.BestItemLikeCount>
                        <LikeOutlined style={{ color: "#FFD600" }} />
                        {el.likeCount}
                      </S.BestItemLikeCount>
                    </S.Bottom_Right>
                  </S.TextBottom>
                </S.BestItemText>
              </S.ItemWrapper>
            )
          )}
        </S.BestItem>
        <S.Container_top>
          <S.SearchContents>
            <S.SearchContents_input
              onChange={props.onChangeSearchContents}
              placeholder="제목을 검색하세요"
            />
            <S.SearchContents_button>
              <SearchOutlined />
            </S.SearchContents_button>
          </S.SearchContents>
          <S.CreateNewBoard onClick={props.onClickNewCreateBoard}>
            게시물 등록하기
          </S.CreateNewBoard>
        </S.Container_top>
        <S.Wrapper>
          <S.Contents>
            <S.List_Container>
              <S.List_Item>
                <S.Bottom>
                  <S.Bottom_Num>번호</S.Bottom_Num>
                  <S.Bottom_title>제목</S.Bottom_title>
                  <S.Bottom_writer>작성자</S.Bottom_writer>
                  <S.Bottom_Time>작성 날짜</S.Bottom_Time>
                </S.Bottom>
              </S.List_Item>

              {props.data?.fetchBoards.map((el, index) => (
                <S.List_Item
                  onClick={props.onClickMovedBoard}
                  id={el._id}
                  key={index}
                >
                  <S.Item_Bottom>
                    <S.Bottom>
                      <S.Bottom_Num>{index}</S.Bottom_Num>
                      <S.Bottom_title>{el.title}</S.Bottom_title>
                      <S.Bottom_writer>{el.writer}</S.Bottom_writer>
                      <S.Bottom_Time>{getDate(el.createdAt)}</S.Bottom_Time>
                    </S.Bottom>
                  </S.Item_Bottom>
                </S.List_Item>
              ))}
            </S.List_Container>

            <S.Wrapper_footer>
              <Paginations01 refetch={props.refetch} count={props.count} />
            </S.Wrapper_footer>
          </S.Contents>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
