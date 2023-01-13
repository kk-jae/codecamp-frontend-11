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
} from "../../styles/20230109";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const apiInputImp = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

//과제
export default function PortFolio() {
  //여기는 자바스크립트 쓰는 곳
  const [apiImp] = useMutation(apiInputImp);

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
    if (name) {
      setNameError("");
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (password) {
      setPasswordError("");
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (title) {
      setTitleError("");
    }
  }

  function onChangeContent(event) {
    setContent(event.target.value);
    if (content) {
      setContentError("");
    }
  }

  // if문을 분리해서 다시 진행
  const onClickContent = async () => {
    if (!name) {
      setNameError("이름을 입력해주세요.");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }

    if (!title) {
      setTitleError("제목을 입력해주세요");
    }

    if (!content) {
      setContentError("내용을 입력해주세요");
    }
    const result = await apiImp({
      variables: {
        createBoardInput: {
          writer: name,
          password: password, //value 생략 가능
          title: title, //value 생략 가능
          contents: content,
          //키와 value가 동일하면 value 생략 가능합니다. (shorthand-property)
        },
      },
    });
    console.log(result);

    if (name && password && title && content) {
      alert("회원가입을 축하합니다.");
    }
  };

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
