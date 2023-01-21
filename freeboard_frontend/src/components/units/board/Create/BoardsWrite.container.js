import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import PortFolioCreateBoardsUI from "../Create/BoardsWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "../Create/BoardsWrite.queries";

export default function PortFolioCreateBoards(props) {
  //여기는 자바스크립트 쓰는 곳
  const [isActive, setIsActive] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState();
  const [password, setPassword] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  const [youtubeUrl, setYoutubeUrl] = useState();

  const [writerError, setWriterError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [titleError, setTitleError] = useState();
  const [contentsError, setContentsError] = useState();

  const router = useRouter();

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value) {
      setWriterError("");
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }

    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }

    if (writer && password && event.target.value && contents) {
      setIsActive(true); //색상 노란색으로 변경
    }
  }

  function onChangeContents(event) {
    setContents(event.target.value);
    if (event.target.value) {
      setContentsError("");
      setIsActive(false);
    }

    if (writer && password && title && event.target.value) {
      setIsActive(true);
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
      alert("게시글 등록이 완료되었습니다.");
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

      router.push(`/homework/${result.data.createBoard._id}`);
    }
  };

  const onClickUpdateBoard = async () => {
    const myVariables = {
      boardId: router.query.boardId,
      password: password,
      updateBoardInput: {
        title,
        contents,
        youtubeUrl,
      },
    };
    if (title) myVariables.title = title;
    // if (title !== "") {
    //   myVariables.title = title;
    // }
    if (contents) myVariables.title = contents;
    const result = await updateBoard({
      variables: myVariables,
    });

    // const result = await updateBoard({
    //   variables: {
    //     updateBoardInput: {
    //       title,
    //       contents,
    //       youtubeUrl,
    //     },
    //     password: password,
    //     boardId: router.query.boardId,
    //   },
    // });
    // console.log(result);

    router.push(`/homework/${result.data.updateBoard._id}`);
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
      isActive={isActive}
      onClickUpdateBoard={onClickUpdateBoard}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
