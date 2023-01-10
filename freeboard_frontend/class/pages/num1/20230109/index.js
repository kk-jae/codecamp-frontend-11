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
  FirstContentItem,
  FirstContentInput,
  FirstContentHead,
  TextError,
} from "../../../styles/20230109";
import { useState } from "react";

//과제
export default function EmotionPage() {
  //여기는 자바스크립트 쓰는 곳
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeContent(event) {
    setContent(event.target.value);
  }

  function onClickContent(event) {
    if (name === "" && password === "" && title === "" && content === "") {
      setNameError("이름이 없습니다.");
      setPasswordError("비밀번호가 없습니다.");
      setContentError("내용이 없습니다.");
      setTitleError("제목이 없습니다.");
    } else if (name === "" && password === "" && title === "") {
      setNameError("이름이 없습니다.");
      setPasswordError("비밀번호가 없습니다.");
      setTitleError("제목이 없습니다.");
    } else if (name === "" && password === "" && content === "") {
      setPasswordError("비밀번호가 없습니다.");
      setNameError("이름이 없습니다.");
      setContentError("내용이 없습니다.");
    } else if (name === "" && title === "" && content === "") {
      setNameError("이름이 없습니다.");
      setContentError("내용이 없습니다.");
      setTitleError("제목이 없습니다.");
    } else if (name === "" && content === "") {
      setNameError("이름이 없습니다.");
      setContentError("내용이 없습니다.");
    } else if (name === "" && title === "") {
      setTitleError("제목이 없습니다.");
      setNameError("이름이 없습니다.");
    } else if (name === "" && password === "") {
      setNameError("이름이 없습니다.");
      setPasswordError("비밀번호가 없습니다.");
    } else if (password === "" && content === "" && title === "") {
      setPasswordError("비밀번호가 없습니다.");
      setTitleError("제목이 없습니다.");
      setContentError("내용이 없습니다.");
    } else if (password === "" && title === "") {
      setTitleError("제목이 없습니다.");
      setPasswordError("비밀번호가 없습니다.");
    } else if (password === "" && content === "") {
      setContentError("내용이 없습니다.");
      setPasswordError("비밀번호가 없습니다.");
    } else if (title === "" && content === "") {
      setContentError("내용이 없습니다.");
      setTitleError("제목이 없습니다.");
    } else if (name === "") {
      setNameError("이름이 없습니다.");
    } else if (password === "") {
      setPasswordError("비밀번호가 없습니다.");
    } else if (content === "") {
      setContentError("내용이 없습니다.");
    } else alert("회원가입을 축하합니다.");
  }

  return (
    <Container>
      <Head>게시물 등록</Head>
      <Title>
        <FirstContent>
          <FirstContentItem>
            <FirstContentHead>
              작성자
              <TextError>{nameError}</TextError>
            </FirstContentHead>
            <FirstContentInput
              onChange={onChangeName}
              type="text"
              placeholder="이름을 입력하세요"
            />
          </FirstContentItem>
          <FirstContentItem>
            <FirstContentHead>
              비밀번호
              <TextError>{passwordError}</TextError>
            </FirstContentHead>
            <FirstContentInput
              onChange={onChangePassword}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </FirstContentItem>
        </FirstContent>
        <Content>
          <ContentHead>
            제목 <TextError>{titleError}</TextError>
          </ContentHead>
          <ContentInput
            onChange={onChangeTitle}
            placeholder="제목을 입력해주세요"
          />
        </Content>
        <Content>
          <ContentHead>
            내용
            <TextError>{contentError}</TextError>
          </ContentHead>
          <ContentInputN
            onChange={onChangeContent}
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
          <ContentHead>유튜브</ContentHead>
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
      <LastBtn onClick={onClickContent}>등록하기</LastBtn>
    </Container>
  );
}
