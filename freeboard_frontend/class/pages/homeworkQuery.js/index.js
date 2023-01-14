import {
  Container,
  HeadContainer,
  BodyContainer,
  FooterContainer,
  Head_Title,
  Title,
  GPS,
  ProFile,
  Head_Body,
  BoardTitle,
  BoardImg,
  BoardDetail,
  BoardYouTube,
  LikeImp,
  Body,
  Footer,
  Footer_Review_title,
  Footer_Review_WriterImp,
  Footer_Review_Saved,
  ProFile_img,
  ProFile_Name_Date,
  FileIcon,
  GpsIcon,
} from "../../styles/portfolio/20230109";
import {} from "../../styles/portfolio/20230114";

export default function portFolio() {
  return (
    <Container>
      <HeadContainer>
        <Head_Title>
          <Title>
            <GPS>자세한 위치 정보</GPS>
            <ProFile>
              <ProFile_img></ProFile_img>
              <ProFile_Name_Date></ProFile_Name_Date>
            </ProFile>
            <FileIcon></FileIcon>
            <GpsIcon></GpsIcon>
          </Title>
        </Head_Title>
        <Head_Body>
          <BoardTitle></BoardTitle>
          <BoardImg></BoardImg>
          <BoardDetail></BoardDetail>
          <BoardYouTube></BoardYouTube>
          <LikeImp></LikeImp>
        </Head_Body>
      </HeadContainer>
      <BodyContainer>
        <Body></Body>
      </BodyContainer>
      <FooterContainer>
        <Footer>
          <Footer_Review_title></Footer_Review_title>
          <Footer_Review_WriterImp></Footer_Review_WriterImp>
          <Footer_Review_Saved></Footer_Review_Saved>
        </Footer>
      </FooterContainer>
    </Container>
  );
}
