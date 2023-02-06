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
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Typography } from "antd";

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
    <S.Container>
      <S.Wrapper>
        {/* <S.Wrapper_title>
          <S.Title_number>번호</S.Title_number>
          <S.Title_title>제목</S.Title_title>
          <S.Title_writer>작성자</S.Title_writer>
          <S.Title_createdAt>날짜</S.Title_createdAt>
        </S.Wrapper_title> */}
        <S.WrapperHead>조회수</S.WrapperHead>
        <S.List_Container>
          {props.data?.fetchBoards.map((el) => (
            <S.Wrapper_list key={el._id}>
              <S.List_img_Text>
                <S.List_img src="/image 02.png" />
                {/* <S.List_number>
                {String(el._id).slice(-4).toUpperCase()}
              </S.List_number> */}
                <S.List_Title_Writer_likeCount>
                  <S.List_writer>{el.writer}</S.List_writer>
                  <S.List_title id={el._id} onClick={props.onClickMovedBoard}>
                    {el.title}
                  </S.List_title>
                  <S.Like_Count>
                    <S.Count_img src="/BoardPage/like.png" />
                    <S.Count_num>{el.likeCount}</S.Count_num>
                  </S.Like_Count>
                </S.List_Title_Writer_likeCount>
                {/* <S.List_createdAt>{getDate(el.createdAt)}</S.List_createdAt> */}
              </S.List_img_Text>
            </S.Wrapper_list>
          ))}
        </S.List_Container>
        <S.Wrapper_footer>
          {/* 페이지 네이션 시작 */}
          <Paginations01 refetch={props.refetch} count={props.count} />
          {/* 페이지 네이션 종료 */}
          <S.CreateNewBoard onClick={props.onClickNewCreateBoard}>
            <img alt="게시글등록" src="../BoardPage/List_newBoard.png"></img>
            게시물 등록하기
          </S.CreateNewBoard>
        </S.Wrapper_footer>
      </S.Wrapper>
    </S.Container>
  );
}
