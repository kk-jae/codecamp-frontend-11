import * as S from "../commentEdit01/commentEdit.styles";
import { Rate } from "antd";
import { Modal } from "antd";
import { getDate } from "../../../commons/libraries/utils";
import { IPropsCommentEditPage } from "./commentEdit.types";

export default function CommentEditUI(props: IPropsCommentEditPage) {
  return (
    <S.PAGE>
      <S.Container>
        <S.Footer>
          <S.Footer_Body>
            <S.Footer_Body_Header>
              <S.Review_Writer
                onChange={props.onChangeWriter}
                value={props.el.writer}
                readOnly={true}
              />
              <S.Review_Password
                onChange={props.onChangeUpdateCommentPassword}
                placeholder="비밀번호"
                type="password"
              />
              <S.Review_Rating>
                <span>
                  <Rate
                    onChange={props.setUpdateCommentRating}
                    defaultValue={props.el.rating}
                  />
                </span>
              </S.Review_Rating>
            </S.Footer_Body_Header>
            <S.Footer_Contents>
              <S.Footer_Body_Contents
                onChange={props.onChangeUpdateCommentContents}
                defaultValue={props.el.contents}
              />
              <S.Footer_Body_Contents_number_click>
                <S.Footer_Body_Contents_number></S.Footer_Body_Contents_number>
                <S.Footer_Body_Contents_click onClick={props.onClickCencel}>
                  취소하기
                </S.Footer_Body_Contents_click>
                <S.Footer_Body_Contents_click
                  onClick={props.onClickUpdateBoardComment}
                >
                  수정하기
                </S.Footer_Body_Contents_click>
              </S.Footer_Body_Contents_number_click>
            </S.Footer_Contents>
          </S.Footer_Body>
        </S.Footer>
      </S.Container>
    </S.PAGE>
  );
}
