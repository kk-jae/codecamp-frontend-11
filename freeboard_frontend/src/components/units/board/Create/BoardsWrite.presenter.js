import {
  Head,
  Container,
  Title,
  Content,
  ContentHead,
  ContentInput,
  AdrTop,
  AdrTopInput,
  ContentInputN,
  AdrTopBtn,
  AdrBot,
  ContentPhoto,
  ContentPhotoPic,
  Pic,
  PhotoHead,
  ContentInp,
  LastBtn,
  FirstContent,
  FirstContentItem1,
  FirstContentInput1,
  FirstContentHead1,
  TextError,
} from "../Create/BoardsWrite.styles";

//과제
export default function PortFolioCreateBoardsUI(props) {
  return (
    <Container>
      <Head>게시물 등록</Head>
      <Title>
        <FirstContent>
          <FirstContentItem1>
            <FirstContentHead1>
              작성자
              <TextError>{props.writerError}</TextError>
            </FirstContentHead1>
            <FirstContentInput1
              onChange={props.onChangeWriter}
              type="text"
              placeholder="이름을 입력하세요"
            />
          </FirstContentItem1>
          <FirstContentItem1>
            <FirstContentHead1>
              비밀번호
              <TextError>{props.passwordError}</TextError>
            </FirstContentHead1>
            <FirstContentInput1
              onChange={props.onChangePassword}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </FirstContentItem1>
        </FirstContent>
        <Content>
          <ContentHead>
            제목 <TextError>{props.titleError}</TextError>
          </ContentHead>
          <ContentInput
            onChange={props.onChangeTitle}
            placeholder="제목을 입력해주세요"
          />
        </Content>
        <Content>
          <ContentHead>
            내용
            <TextError>{props.contentsError}</TextError>
          </ContentHead>
          <ContentInputN
            onChange={props.onChangeContents}
            placeholder="내용을 입력하세요"
          />
        </Content>
        <Content>
          <ContentHead>주소</ContentHead>
          <AdrTop>
            <AdrTopInput placeholder="07250" />
            <AdrTopBtn>우편번호 검색</AdrTopBtn>
          </AdrTop>
          <AdrBot>
            <ContentInput></ContentInput>
            <ContentInput></ContentInput>
          </AdrBot>
        </Content>
        <Content>
          <ContentHead onChange={props.onChangeYoutubeUrl}>유튜브</ContentHead>
          <ContentInput placeholder="링크를 복사해주세요" />
        </Content>
        <ContentPhoto>
          <ContentHead>사진첨부</ContentHead>
          <PhotoHead>
            <ContentPhotoPic>
              <Pic>+</Pic>
              <Pic>Upload</Pic>
            </ContentPhotoPic>
            <ContentPhotoPic>
              <Pic>+</Pic>
              <Pic>Upload</Pic>
            </ContentPhotoPic>
            <ContentPhotoPic>
              <Pic>+</Pic>
              <Pic>Upload</Pic>
            </ContentPhotoPic>
          </PhotoHead>
        </ContentPhoto>
        <Content>
          <ContentHead>메인 설정</ContentHead>
          <ContentInp type="radio" name="main" />
          유튜브
          <ContentInp type="radio" name="main" />
          사진
        </Content>
      </Title>
      <LastBtn onClick={props.onClickContents}>등록하기</LastBtn>
    </Container>
  );
}
