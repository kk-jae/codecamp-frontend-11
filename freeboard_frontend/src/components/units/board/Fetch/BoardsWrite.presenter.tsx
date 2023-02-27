import * as S from "./BoardsWrite.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IProtFolioQueryUI } from "./BoardWrite.type";
import React from "react";
import ReactPlayer from "react-player";
import { Tooltip } from "antd";
import PortFolioMovedComments from "../../../../../pages/homepage/comment";
import BoardCarousel from "../../../commons/BoardCarousel";

export default function PortFolioQueryUI(props: IProtFolioQueryUI) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Wrapper_Left>
          {/* <S.ImageItem
            src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}`}
            alt="이미지가 없습니다."
          /> */}
          <S.ImageCarouselContainer>
            {props.data?.fetchBoard.images?.length !== 0 ? (
              <BoardCarousel data={props.data?.fetchBoard.images} />
            ) : (
              <img src="d" alt="이미지를 등록해보세요😀" />
            )}
            {/* <BoardCarousel data={props.data?.fetchBoard.images} /> */}
          </S.ImageCarouselContainer>
        </S.Wrapper_Left>
        <S.Wrapper_Center>
          <S.Center_Top>
            <S.Center_Top_left>
              <S.Writer_Img src="../BoardPage/writerIMG.png" alt="이미지" />
              <S.Writer_Name>{props.data?.fetchBoard?.writer}</S.Writer_Name>
            </S.Center_Top_left>
            <S.Center_Top_right>
              <S.Center_Top_right_file_gps>
                <S.Right_file src="../BoardPage/FILE.png" alt="파일" />
                <Tooltip
                  placement="topRight"
                  title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} 
                  ${props.data?.fetchBoard.boardAddress?.addressDetail ?? ""}`}
                >
                  <S.Right_Gps src="../BoardPage/GPS.png" alt="위치" />
                </Tooltip>
              </S.Center_Top_right_file_gps>
            </S.Center_Top_right>
          </S.Center_Top>
          <S.Center_Middle>
            <S.Center_Middle_title_detail_comment>
              <S.Center_Middle_title_detail>
                <S.Body_Title>
                  {props.data?.fetchBoard?.title}
                  <S.Writer_Date>
                    {getDate(props.data?.fetchBoard?.createdAt)}
                  </S.Writer_Date>
                </S.Body_Title>
                <S.Body_detail>
                  {props.data?.fetchBoard?.contents}
                </S.Body_detail>
              </S.Center_Middle_title_detail>
              {/* 댓글 시작 */}
              <S.Center_Middle_comment>
                <S.Center_Middle_comment_text>
                  댓글
                </S.Center_Middle_comment_text>
                <PortFolioMovedComments />
              </S.Center_Middle_comment>
              {/* 댓글 종료 */}
            </S.Center_Middle_title_detail_comment>
          </S.Center_Middle>
          <S.Youtube_Btn>
            <S.Body_youtube>
              {props.data?.fetchBoard?.youtubeUrl ? (
                <ReactPlayer
                  url={props.data?.fetchBoard?.youtubeUrl}
                  width="100%"
                  height="100%"
                />
              ) : (
                <span></span>
              )}
            </S.Body_youtube>
            <S.Body_Btn>
              <S.Body_Btn_List onClick={props.onClickNewCreateBoard}>
                목록으로
              </S.Body_Btn_List>
              <S.Body_Btn_update onClick={props.onClickContents}>
                수정하기
              </S.Body_Btn_update>
              <S.Body_Btn_delete onClick={props.onClickDeleteBoard}>
                삭제하기
              </S.Body_Btn_delete>
            </S.Body_Btn>
          </S.Youtube_Btn>
        </S.Wrapper_Center>
      </S.Wrapper>
    </S.Container>
  );
}

/* <S.Body_Like>
  <S.Like_left onClick={props.onClickLikeBoard}>
    <S.Like_left_img src="../BoardPage/like.png" alt="좋아요" />
    <S.Like_left_count>
      {props.data?.fetchBoard.likeCount}
    </S.Like_left_count>
  </S.Like_left>
  <S.Like_right onClick={props.onClickDisLikeBoard}>
    <S.Like_right_img src="../BoardPage/dislike.png" alt="싫어요" />
    <S.Like_right_count>
      {props.data?.fetchBoard.dislikeCount}
    </S.Like_right_count>
  </S.Like_right>
</S.Body_Like> */
