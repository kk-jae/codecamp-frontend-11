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

interface IBoardsListContainerUIProps {
  data: Pick<IQuery, "fetchBoards">;
  onClickNewCreateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMovedBoard: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}

const TOP_3 = [
  { name: "방탄소년단", imgUrl: "/skipjack/logo.jpg" },
  { name: "십센치", imgUrl: "/skipjack/logo.jpg" },
  { name: "스킵잭", imgUrl: "/skipjack/logo.jpg" },
];

export default function BoardsListContainerUI(
  props: IBoardsListContainerUIProps
) {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Top3_Container>
            <S.Top3_Wrapper>
              {TOP_3.map((el, index) => (
                <S.Top3_List>
                  <S.Top3_List_Wrapper>
                    <S.Top3_border></S.Top3_border>
                    <S.Top_num>{index + 1}</S.Top_num>
                  </S.Top3_List_Wrapper>
                  <S.Top_Text>
                    <S.Top_name>{el.name}</S.Top_name>
                    <S.Top_img></S.Top_img>
                  </S.Top_Text>
                </S.Top3_List>
              ))}
            </S.Top3_Wrapper>
          </S.Top3_Container>
          <S.Contents>
            <S.List_Container>
              {props.data?.fetchBoards.map((el) => (
                <S.List_Item>
                  <S.Item_left>
                    <S.Left_img src="/skipjack/logo.jpg" alt="이미지" />
                  </S.Item_left>
                  <S.Item_right>
                    <S.Right_left>
                      <S.Right_writer>{el.writer}</S.Right_writer>
                      <S.Right_title>{el.title}</S.Right_title>
                    </S.Right_left>
                    <S.Right_right></S.Right_right>
                  </S.Item_right>
                </S.List_Item>
              ))}
            </S.List_Container>
            <S.Wrapper_footer>
              {/* 페이지 네이션 시작 */}
              {/* <Paginations01 refetch={props.refetch} count={props.count} /> */}
              {/* 페이지 네이션 종료 */}
              <S.CreateNewBoard onClick={props.onClickNewCreateBoard}>
                <img
                  src="../BoardPage/List_newBoard.png"
                  alt="게시글등록"
                ></img>
                게시물 등록하기
              </S.CreateNewBoard>
            </S.Wrapper_footer>
          </S.Contents>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
