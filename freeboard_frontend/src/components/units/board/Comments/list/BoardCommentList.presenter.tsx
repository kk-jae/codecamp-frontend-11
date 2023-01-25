import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import { IProtFolioQueryUI } from "../list/BoardCommentList.type";


export default function PortFolioQueryUI(props: IProtFolioQueryUI) {
  return (
    <S.PAGE>
      <S.Container>
        <S.Footer>
          <S.Footer_Footer>
            {/* 반복 시작 */}
            {props.data?.fetchBoardComments.map((el: any) => (
              <S.Footer_Review key={el._id}>
                <S.Footer_Review_Profile_img
                  src="../BoardPage/writerIMG.png"
                  alt="프로필이미지"
                />
                <S.Footer_Review_Board>
                  <S.Footer_Review_Board_Writer_Rating>
                    <S.Footer_Review_Writer>{el.writer}</S.Footer_Review_Writer>
                    <S.Footer_Review_Rating>{el.rating}</S.Footer_Review_Rating>
                  </S.Footer_Review_Board_Writer_Rating>
                  <S.Footer_Review_contents>
                    {el.contents}
                  </S.Footer_Review_contents>
                  <S.Footer_Review_date>{getDate(el.createdAt)}</S.Footer_Review_date>
                </S.Footer_Review_Board>
                <S.Footer_Review_update_delete>
                  <S.Footer_Review_update
                    src="../BoardPage/reviewUp.png"
                    alt="수정"
                  />
                    <S.Footer_Review_delete
                      id={el._id} onClick={props.onClickDeleteComment}
                      src="../BoardPage/reviewDel.png"
                      alt="삭제"
                    />
                </S.Footer_Review_update_delete>
              </S.Footer_Review>
            ))}
            {/* 반복 끝 */}
          </S.Footer_Footer>
        </S.Footer>
      </S.Container>
    </S.PAGE>
  );
}
