import * as S from "./BoardsWrite.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { ChangeEvent, MouseEvent } from "react";
import { 
  IQuery,   
} from "../../../../commons/types/generated/types";


interface IProtFolioQueryUI {
  data?: Pick<IQuery, "fetchBoard">;
  onClickContents: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickNewCreateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateBoardComment: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function PortFolioQueryUI(props: IProtFolioQueryUI) {
  return (
    <S.PAGE>
      <S.Container>
        <S.Head>
          <S.Head_header>
            <S.Header_right>
              <S.GpsImp>
                서울특별시 영등포구 양산로 200 <br />
                (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층
              </S.GpsImp>
            </S.Header_right>
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
                  <S.Right_Gps src="../BoardPage/GPS.png" alt="위치" />
                </S.WriterImp_right>
              </S.WriterImp>
            </S.Header_left>
          </S.Head_header>
          <S.Head_body>
            <S.Head_body_left>
              <S.Body_Title>{props.data?.fetchBoard?.title}</S.Body_Title>
              <S.Body_img src="../BoardPage/boardIMG.png" alt="게시글 이미지" />
              <S.Body_detail>{props.data?.fetchBoard?.contents}</S.Body_detail>
            </S.Head_body_left>
            <S.Head_body_center>
              <S.Body_youtube
                src={props.data?.fetchBoard?.youtubeUrl}
              ></S.Body_youtube>
              {/* <S.Body_youtube src="https://www.youtube.com/embed/5pRIDXQJxzw"></S.Body_youtube> */}
              <S.Body_Like>
                <S.Like_left>
                  <S.Like_left_img src="../BoardPage/like.png" alt="좋아요" />
                  <S.Like_left_count>1920</S.Like_left_count>
                </S.Like_left>
                <S.Like_right>
                  <S.Like_right_img
                    src="../BoardPage/dislike.png"
                    alt="싫어요"
                  />
                  <S.Like_right_count>1920</S.Like_right_count>
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
