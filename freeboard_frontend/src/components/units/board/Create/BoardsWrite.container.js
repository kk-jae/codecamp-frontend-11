import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import PortFolioCreateBoardsUI from "../Create/BoardsWrite.presenter";
import { CREATE_BOARD } from "../Create/BoardsWrite.queries";

export default function PortFolioCreateBoards() {
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
            password, //value 생략 가능
            title, //value 생략 가능
            contents,
            //키와 value가 동일하면 value 생략 가능합니다. (shorthand-property)
            youtubeUrl,
          },
        },
      });
      router.push(`/homeworkQuery/${result.data.createBoard._id}`);
      console.log(result);
      console.log(router);
    }
  };

  return (
    <PortFolioCreateBoardsUI
      onChangeWriter={onChangeWriter}
      //onChangeWriter 함수를 왼쪽에 할당함
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickContents={onClickContents}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
    />
  );
}
