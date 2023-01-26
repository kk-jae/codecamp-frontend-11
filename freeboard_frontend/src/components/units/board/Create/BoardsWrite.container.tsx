import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import PortFolioCreateBoardsUI from "./BoardsWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardsWrite.queries";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import { IQuery } from "../../../../commons/types/generated/types";
import { IMyVariables, PortFolioCreateBoardsProps } from "../Create/BoardsWrite.type";



export default function PortFolioCreateBoards(
  props: PortFolioCreateBoardsProps
) {
  //여기는 자바스크립트 쓰는 곳

  const [isActive, setIsActive] = useState(false);

  const [createBoard] = useMutation<
  Pick<IMutation, "createBoard">,
  IMutationCreateBoardArgs
>(CREATE_BOARD);

  const [updateBoard] = useMutation<
  Pick<IMutation, "updateBoard">,
  IMutationUpdateBoardArgs
>(UPDATE_BOARD);

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

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value) {
      setWriterError("");
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }

    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }

    if (writer && password && event.target.value && contents) {
      setIsActive(true); 
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value) {
      setContentsError("");
    } else {
      setIsActive(false);
    }

    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

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
      try{

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
        router.push(`/homework/${result.data?.createBoard._id}`);
      } catch(error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  }

  const onClickUpdateBoard = async () => {
    try {
      const myVariables: IMyVariables = {
        boardId: router.query.boardId,
        password: password,
        updateBoardInput: {
          title,
          contents,
          youtubeUrl,
        },
      };
      if (title) myVariables.updateBoardInput.title = title;
      // if (title !== "") {
        //   myVariables.title = title;
        // }
      if (contents) myVariables.updateBoardInput.contents = contents;
      
      const result = await updateBoard({
        variables: myVariables,
      });
      
      router.push(`/homework/${result.data?.updateBoard._id}`);
    }catch(error) {
      if(error instanceof Error) alert(error.message);
            // error가 Error의 인스턴스면 true를 반환합니다.
      // true 일경우 error.message를 반환합니다.
      // *인스턴스 : 함수의 기능(new Date() or Error 등)을 할당받은 변수
      // ex) let data = new Date() : data 는 new Date의 인스턴스입니다.
    }
  };

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


    
  return (
    <PortFolioCreateBoardsUI
      onChangeWriter={onChangeWriter}
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