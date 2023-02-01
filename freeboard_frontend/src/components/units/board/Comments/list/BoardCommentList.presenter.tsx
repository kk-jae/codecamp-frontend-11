import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../../commons/libraries/utils";
import { IProtFolioQueryUI } from "../list/BoardCommentList.type";
import { Rate } from "antd";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { useState } from "react";
import CommentEditPage from "../../../../commons/commentEdit01/commentEdit.container";

export default function PortFolioQueryUI(props: IProtFolioQueryUI) {
  return (
    <S.PAGE>
      <S.Container>
        <S.Footer>
          <S.Footer_Footer>
            <div>
              <InfiniteScroll
                pageStart={0}
                loadMore={props.loadFunc}
                hasMore={true}
              >
                {/* 반복 시작 */}
                {props.data?.fetchBoardComments.map((el, index) =>
                  props.myIndex !== index ? (
                    <S.Footer_Review key={el._id}>
                      <S.Footer_Review_Profile_img
                        src="../BoardPage/writerIMG.png"
                        alt="프로필이미지"
                      />
                      <S.Footer_Review_Board>
                        <S.Footer_Review_Board_Writer_Rating>
                          <S.Footer_Review_Writer>
                            {el.writer}
                          </S.Footer_Review_Writer>
                          <S.Footer_Review_Rating>
                            <span>
                              <Rate disabled={true} value={el.rating} />
                            </span>
                          </S.Footer_Review_Rating>
                          {/* <S.Footer_Review_Rating>{el.rating}</S.Footer_Review_Rating> */}
                        </S.Footer_Review_Board_Writer_Rating>
                        <S.Footer_Review_contents>
                          {el.contents}
                        </S.Footer_Review_contents>
                        <S.Footer_Review_date>
                          {getDate(el.createdAt)}
                        </S.Footer_Review_date>
                      </S.Footer_Review_Board>
                      <S.Footer_Review_update_delete>
                        <S.Footer_Review_update
                          onClick={props.onClickUpdateBoardCommentInputs}
                          id={String(index)}
                          src="../BoardPage/reviewUp.png"
                          alt="수정"
                        />
                        <S.Footer_Review_delete
                          src="../BoardPage/reviewDel.png"
                          alt="삭제"
                          id={el._id}
                          onClick={props.showModal}
                        ></S.Footer_Review_delete>
                        <Modal
                          title="비밀번호를 입력하세요"
                          open={props.isModalOpen}
                          onOk={props.handleOk}
                          onCancel={props.handleCancel}
                        >
                          <input
                            type="password"
                            onChange={props.onChangeCommentPassword}
                          />
                        </Modal>
                      </S.Footer_Review_update_delete>
                    </S.Footer_Review>
                  ) : (
                    // ====================버튼 눌렸을때 ==================
                    <div key={el._id}>
                      <CommentEditPage
                        data={props.data}
                        el={el}
                        myIndex={props.myIndex}
                        setMyIndex={props.setMyIndex}
                      />
                    </div>
                    // ====================버튼 눌렸을때 종료 ==================
                  )
                ) ?? <div></div>}
                {/* 반복 끝 */}
              </InfiniteScroll>
            </div>
          </S.Footer_Footer>
        </S.Footer>
      </S.Container>
    </S.PAGE>
  );
}
