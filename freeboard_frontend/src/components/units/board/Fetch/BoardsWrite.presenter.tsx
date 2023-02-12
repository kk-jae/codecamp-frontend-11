import * as S from "./BoardsWrite.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IProtFolioQueryUI } from "./BoardWrite.type";
import React from "react";
import ReactPlayer from "react-player";
import { Tooltip } from "antd";

export default function PortFolioQueryUI(props: IProtFolioQueryUI) {
  return (
    <S.PAGE>
      <S.Container>
        <S.Head>
          <S.Head_header>
            <S.Header_right></S.Header_right>
            <S.Header_left>
              <S.WriterImp>
                <S.WriterImp_left>
                  <S.Writer_Img src="../BoardPage/writerIMG.png" alt="이미지" />
                  <S.Writer_Name_Date>
                    <S.Writer_Name>
                      {props.data?.fetchBoard?.writer}
                    </S.Writer_Name>
                    <S.Writer_Date>
                      {getDate(props.data?.fetchBoard?.createdAt)}
                    </S.Writer_Date>
                  </S.Writer_Name_Date>
                </S.WriterImp_left>
                <S.WriterImp_right>
                  <S.Right_file src="../BoardPage/FILE.png" alt="파일" />
                  <Tooltip
                    placement="topRight"
                    title={`${
                      props.data?.fetchBoard.boardAddress?.address ?? ""
                    } 
                    ${
                      props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                    }`}
                  >
                    <S.Right_Gps src="../BoardPage/GPS.png" alt="위치" />
                  </Tooltip>
                </S.WriterImp_right>
              </S.WriterImp>
            </S.Header_left>
          </S.Head_header>
          <S.Head_body>
            <S.Head_body_left>
              <S.Body_Title>{props.data?.fetchBoard?.title}</S.Body_Title>
              <S.Body_Img_Container>
                <S.Body_imgWrapper>
                  <S.ImageItem
                    src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}`}
                  />
                </S.Body_imgWrapper>
              </S.Body_Img_Container>
              {/* <S.Body_img src="../BoardPage/boardIMG.png" alt="게시글 이미지" /> */}
              <S.Body_detail>{props.data?.fetchBoard?.contents}</S.Body_detail>
            </S.Head_body_left>
            <S.Head_body_center>
              <S.Body_youtube>
                <ReactPlayer
                  url={props.data?.fetchBoard?.youtubeUrl}
                  width="100%"
                  height="100%"
                />
              </S.Body_youtube>
              <S.Body_Like>
                <S.Like_left onClick={props.onClickLikeBoard}>
                  <S.Like_left_img src="../BoardPage/like.png" alt="좋아요" />
                  <S.Like_left_count>
                    {props.data?.fetchBoard.likeCount}
                  </S.Like_left_count>
                </S.Like_left>
                <S.Like_right onClick={props.onClickDisLikeBoard}>
                  <S.Like_right_img
                    src="../BoardPage/dislike.png"
                    alt="싫어요"
                  />
                  <S.Like_right_count>
                    {props.data?.fetchBoard.dislikeCount}
                  </S.Like_right_count>
                </S.Like_right>
              </S.Body_Like>
            </S.Head_body_center>
          </S.Head_body>
        </S.Head>
        <S.Body>
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
        </S.Body>
      </S.Container>
    </S.PAGE>
  );
}
