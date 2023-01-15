import {
  PAGE,
  Container,
  Head,
  Body,
  Footer,
  Head_header,
  GpsImp,
  WriterImp,
  Writer_Img,
  Writer_Name_Date,
  Writer_Name,
  Writer_Date,
  WriterImp_left,
  WriterImp_right,
  Right_file,
  Right_Gps,
  Head_body_left,
  Body_Title,
  Body_img,
  Body_detail,
  Body_youtube,
  Body_Like,
  Body_Btn,
  Footer_Head,
  Footer_Body,
  Footer_Footer,
  Footer_Body_Header,
  Footer_Body_Contents,
  Header_left,
  Header_right,
  Head_body_center,
  Head_body,
  Like_left,
  Like_right,
  Like_left_img,
  Like_right_img,
  Like_left_count,
  Like_right_count,
  Body_Btn_List,
  Body_Btn_update,
  Body_Btn_delete,
  Footer_Head_Img,
  Footer_Head_text,
  Review_Password,
  Review_Writer,
  Review_Rating,
  Footer_Body_Contents_number,
  Footer_Body_Contents_click,
  Footer_Contents,
  Footer_Body_Contents_number_click,
  Footer_Review,
  Footer_Review_Profile_img,
  Footer_Review_Board,
  Footer_Review_Writer,
  Footer_Review_Rating,
  Footer_Review_contents,
  Footer_Review_date,
  Footer_Review_update,
  Footer_Review_delete,
  Footer_Review_Board_Writer_Rating,
  Footer_Review_update_delete,
} from "../../../styles/portfolio/20230114";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
    }
  }
`;

export default function portFolio() {
  const router = useRouter();
  // console.log(router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query._id },
  });

  console.log(data);

  return (
    <PAGE>
      <Container>
        <Head>
          <Head_header>
            <Header_right>
              <GpsImp>
                서울특별시 영등포구 양산로 200 <br />
                (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층
              </GpsImp>
            </Header_right>
            <Header_left>
              <WriterImp>
                <WriterImp_left>
                  <Writer_Img src="../BoardPage/writerIMG.png" alt="이미지" />
                  <Writer_Name_Date>
                    <Writer_Name>{data?.fetchBoard?.writer}</Writer_Name>
                    <Writer_Date>Date:2021.02.18</Writer_Date>
                  </Writer_Name_Date>
                </WriterImp_left>
                <WriterImp_right>
                  <Right_file src="../BoardPage/FILE.png" alt="파일" />
                  <Right_Gps src="../BoardPage/GPS.png" alt="위치" />
                </WriterImp_right>
              </WriterImp>
            </Header_left>
          </Head_header>
          <Head_body>
            <Head_body_left>
              <Body_Title>{data?.fetchBoard?.title}</Body_Title>
              <Body_img src="../BoardPage/boardIMG.png" alt="게시글 이미지" />
              <Body_detail>{data?.fetchBoard?.contents}</Body_detail>
            </Head_body_left>
            <Head_body_center>
              <Body_youtube src={data?.fetchBoard?.youtubeUrl}></Body_youtube>
              <Body_Like>
                <Like_left>
                  <Like_left_img src="../BoardPage/like.png" alt="좋아요" />
                  <Like_left_count>1920</Like_left_count>
                </Like_left>
                <Like_right>
                  <Like_right_img src="../BoardPage/dislike.png" alt="싫어요" />
                  <Like_right_count>1920</Like_right_count>
                </Like_right>
              </Body_Like>
            </Head_body_center>
          </Head_body>
        </Head>
        <Body>
          <Body_Btn>
            <Body_Btn_List>목록으로</Body_Btn_List>
            <Body_Btn_update>수정하기</Body_Btn_update>
            <Body_Btn_delete>삭제하기 </Body_Btn_delete>
          </Body_Btn>
        </Body>
        <Footer>
          <Footer_Head>
            <Footer_Head_Img src="../BoardPage/review.png" alt="review" />
            <Footer_Head_text>댓글</Footer_Head_text>
          </Footer_Head>
          <Footer_Body>
            <Footer_Body_Header>
              <Review_Writer placeholder="작성자" />
              <Review_Password placeholder="비밀번호" />
              <Review_Rating>☆ ☆ ☆ ☆ ☆</Review_Rating>
            </Footer_Body_Header>
            <Footer_Contents>
              <Footer_Body_Contents placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
              <Footer_Body_Contents_number_click>
                <Footer_Body_Contents_number placeholder="0/100" />
                <Footer_Body_Contents_click>
                  등록하기
                </Footer_Body_Contents_click>
              </Footer_Body_Contents_number_click>
            </Footer_Contents>
          </Footer_Body>
          <Footer_Footer>
            <Footer_Review>
              <Footer_Review_Profile_img
                src="../BoardPage/writerIMG.png"
                alt="프로필이미지"
              />
              <Footer_Review_Board>
                <Footer_Review_Board_Writer_Rating>
                  <Footer_Review_Writer>노원두</Footer_Review_Writer>
                  <Footer_Review_Rating> ☆★★★★</Footer_Review_Rating>
                </Footer_Review_Board_Writer_Rating>
                <Footer_Review_contents>
                  진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은
                  정보 부탁드립니다~!
                </Footer_Review_contents>
                <Footer_Review_date>2021.02.22</Footer_Review_date>
              </Footer_Review_Board>
              <Footer_Review_update_delete>
                <Footer_Review_update
                  src="../BoardPage/reviewUp.png"
                  alt="수정"
                />
                <Footer_Review_delete
                  src="../BoardPage/reviewDel.png"
                  alt="삭제"
                />
              </Footer_Review_update_delete>
            </Footer_Review>
            <Footer_Review>
              <Footer_Review_Profile_img
                src="../BoardPage/writerIMG.png"
                alt="프로필이미지"
              />
              <Footer_Review_Board>
                <Footer_Review_Board_Writer_Rating>
                  <Footer_Review_Writer>땅찌</Footer_Review_Writer>
                  <Footer_Review_Rating> ☆★★★★</Footer_Review_Rating>
                </Footer_Review_Board_Writer_Rating>
                <Footer_Review_contents>
                  진짜 좋네요~ 감사합니다~!
                </Footer_Review_contents>
                <Footer_Review_date>2021.02.22</Footer_Review_date>
              </Footer_Review_Board>
              <Footer_Review_update_delete>
                <Footer_Review_update
                  src="../BoardPage/reviewUp.png"
                  alt="수정"
                />
                <Footer_Review_delete
                  src="../BoardPage/reviewDel.png"
                  alt="삭제"
                />
              </Footer_Review_update_delete>
            </Footer_Review>
            <Footer_Review>
              <Footer_Review_Profile_img
                src="../BoardPage/writerIMG.png"
                alt="프로필이미지"
              />
              <Footer_Review_Board>
                <Footer_Review_Board_Writer_Rating>
                  <Footer_Review_Writer>안우엽</Footer_Review_Writer>
                  <Footer_Review_Rating> ☆★★★★</Footer_Review_Rating>
                </Footer_Review_Board_Writer_Rating>
                <Footer_Review_contents>
                  앞으로도 좋은 정보 부탁드립니다~!
                </Footer_Review_contents>
                <Footer_Review_date>2021.02.22</Footer_Review_date>
              </Footer_Review_Board>
              <Footer_Review_update_delete>
                <Footer_Review_update
                  src="../BoardPage/reviewUp.png"
                  alt="수정"
                />
                <Footer_Review_delete
                  src="../BoardPage/reviewDel.png"
                  alt="삭제"
                />
              </Footer_Review_update_delete>
            </Footer_Review>
          </Footer_Footer>
        </Footer>
      </Container>
    </PAGE>
  );
}
