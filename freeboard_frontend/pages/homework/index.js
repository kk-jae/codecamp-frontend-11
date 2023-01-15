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
} from "../../styles/portfolio/20230109";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
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
  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const router = useRouter();

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (writer) {
      setWriterError("");
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

  function onChangeContents(event) {
    setContents(event.target.value);
    if (contents) {
      setContentsError("");
    }
  }
  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value);
  }

  // if문을 분리해서 다시 진행
  const onClickContents = async () => {
    if (!writer) {
      setWriterError("이름을 입력해주세요.");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }

    if (!title) {
      setTitleError("제목을 입력해주세요");
    }

    if (!contents) {
      setContentsError("내용을 입력해주세요");
    }

    if (writer && password && title && contents) {
      alert("회원가입을 축하합니다.");
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password, //value 생략 가능
            title: title, //value 생략 가능
            contents: contents,
            //키와 value가 동일하면 value 생략 가능합니다. (shorthand-property)
            youtubeUrl: youtubeUrl,
          },
        },
      });
      router.push(`/homeworkQuery/${result.data.createBoard._id}`);
      console.log(result);
      console.log(router);
    }
  };

  return (
    <Container>
      <Head>게시물 등록</Head>
      <Title>
        <FirstContent>
          <FirstContentItem1>
            <FirstContentHead1>
              작성자
              <TextError>{writerError}</TextError>
            </FirstContentHead1>
            <FirstContentInput1
              onChange={onChangeWriter}
              type="text"
              placeholder="이름을 입력하세요"
            />
          </FirstContentItem1>
          <FirstContentItem1>
            <FirstContentHead1>
              비밀번호
              <TextError>{passwordError}</TextError>
            </FirstContentHead1>
            <FirstContentInput1
              onChange={onChangePassword}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </FirstContentItem1>
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
            <TextError>{contentsError}</TextError>
          </ContentHead>
          <ContentInputN
            onChange={onChangeContents}
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
          <ContentHead onChange={onChangeYoutubeUrl}>유튜브</ContentHead>
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
      <LastBtn onClick={onClickContents}>등록하기</LastBtn>
    </Container>
  );
}
