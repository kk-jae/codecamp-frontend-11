import * as S from "../Fetch/BoardsWrite.styles";

export default function PortFolioQueryUI(props) {
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
                      {props.data?.fetchBoard?.createdAt}
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
        <S.Footer>
          <S.Footer_Head>
            <S.Footer_Head_Img src="../BoardPage/review.png" alt="review" />
            <S.Footer_Head_text>댓글</S.Footer_Head_text>
          </S.Footer_Head>
          <S.Footer_Body>
            <S.Footer_Body_Header>
              <S.Review_Writer placeholder="작성자" />
              <S.Review_Password placeholder="비밀번호" />
              <S.Review_Rating>☆ ☆ ☆ ☆ ☆</S.Review_Rating>
            </S.Footer_Body_Header>
            <S.Footer_Contents>
              <S.Footer_Body_Contents placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
              <S.Footer_Body_Contents_number_click>
                <S.Footer_Body_Contents_number placeholder="0/100" />
                <S.Footer_Body_Contents_click>
                  등록하기
                </S.Footer_Body_Contents_click>
              </S.Footer_Body_Contents_number_click>
            </S.Footer_Contents>
          </S.Footer_Body>
          <S.Footer_Footer>
            <S.Footer_Review>
              <S.Footer_Review_Profile_img
                src="../BoardPage/writerIMG.png"
                alt="프로필이미지"
              />
              <S.Footer_Review_Board>
                <S.Footer_Review_Board_Writer_Rating>
                  <S.Footer_Review_Writer>노원두</S.Footer_Review_Writer>
                  <S.Footer_Review_Rating> ☆★★★★</S.Footer_Review_Rating>
                </S.Footer_Review_Board_Writer_Rating>
                <S.Footer_Review_contents>
                  진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은
                  정보 부탁드립니다~!
                </S.Footer_Review_contents>
                <S.Footer_Review_date>2021.02.22</S.Footer_Review_date>
              </S.Footer_Review_Board>
              <S.Footer_Review_update_delete>
                <S.Footer_Review_update
                  src="../BoardPage/reviewUp.png"
                  alt="수정"
                />
                <S.Footer_Review_delete
                  src="../BoardPage/reviewDel.png"
                  alt="삭제"
                />
              </S.Footer_Review_update_delete>
            </S.Footer_Review>
            <S.Footer_Review>
              <S.Footer_Review_Profile_img
                src="../BoardPage/writerIMG.png"
                alt="프로필이미지"
              />
              <S.Footer_Review_Board>
                <S.Footer_Review_Board_Writer_Rating>
                  <S.Footer_Review_Writer>땅찌</S.Footer_Review_Writer>
                  <S.Footer_Review_Rating> ☆★★★★</S.Footer_Review_Rating>
                </S.Footer_Review_Board_Writer_Rating>
                <S.Footer_Review_contents>
                  진짜 좋네요~ 감사합니다~!
                </S.Footer_Review_contents>
                <S.Footer_Review_date>2021.02.22</S.Footer_Review_date>
              </S.Footer_Review_Board>
              <S.Footer_Review_update_delete>
                <S.Footer_Review_update
                  src="../BoardPage/reviewUp.png"
                  alt="수정"
                />
                <S.Footer_Review_delete
                  src="../BoardPage/reviewDel.png"
                  alt="삭제"
                />
              </S.Footer_Review_update_delete>
            </S.Footer_Review>
            <S.Footer_Review>
              <S.Footer_Review_Profile_img
                src="../BoardPage/writerIMG.png"
                alt="프로필이미지"
              />
              <S.Footer_Review_Board>
                <S.Footer_Review_Board_Writer_Rating>
                  <S.Footer_Review_Writer>안우엽</S.Footer_Review_Writer>
                  <S.Footer_Review_Rating> ☆★★★★</S.Footer_Review_Rating>
                </S.Footer_Review_Board_Writer_Rating>
                <S.Footer_Review_contents>
                  앞으로도 좋은 정보 부탁드립니다~!
                </S.Footer_Review_contents>
                <S.Footer_Review_date>2021.02.22</S.Footer_Review_date>
              </S.Footer_Review_Board>
              <S.Footer_Review_update_delete>
                <S.Footer_Review_update
                  src="../BoardPage/reviewUp.png"
                  alt="수정"
                />
                <S.Footer_Review_delete
                  src="../BoardPage/reviewDel.png"
                  alt="삭제"
                />
              </S.Footer_Review_update_delete>
            </S.Footer_Review>
          </S.Footer_Footer>
        </S.Footer>
      </S.Container>
    </S.PAGE>
  );
}
