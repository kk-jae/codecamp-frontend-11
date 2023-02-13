import * as S from "./BoardCommentWriter.styles";
import { IProtFolioQueryUI } from "../writer/BoardCommentWriter.type";
import { Rate } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

export default function PortFolioQueryUI(props: IProtFolioQueryUI) {
  return (
    <S.PAGE>
      <S.Container>
        <S.Footer>
          <S.Footer_Head>
            <S.Footer_Head_Img src="../BoardPage/review.png" alt="review" />
            <S.Footer_Head_text>댓글 추가</S.Footer_Head_text>
            <S.Review_Rating>
              <span>
                <Rate onChange={props.setRate} value={props.rate} />
              </span>
            </S.Review_Rating>
          </S.Footer_Head>
          <S.Footer_Body>
            <S.Footer_Body_Header>
              <S.Review_Writer
                onChange={props.onChangeWriter}
                placeholder="작성자"
                value={props.writer}
              />
              <S.Review_Password
                onChange={props.onChangePassword}
                placeholder="비밀번호"
                value={props.password}
                type="password"
              />
            </S.Footer_Body_Header>
            <S.Footer_Contents>
              <S.Footer_Body_Contents
                onChange={props.onChangeContents}
                value={props.contents}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              />
              <S.Footer_Body_Contents_number_click>
                {/* <S.Footer_Body_Contents_number> */}
                {/* {props.contents.length}/100 */}
                {/* </S.Footer_Body_Contents_number> */}
                <S.Footer_Body_Contents_click
                  onClick={props.onClickCreateBoardComment}
                >
                  <RightCircleOutlined />
                </S.Footer_Body_Contents_click>
              </S.Footer_Body_Contents_number_click>
            </S.Footer_Contents>
          </S.Footer_Body>
        </S.Footer>
      </S.Container>
    </S.PAGE>
  );
}
