import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter"; //export default로 한개만 가져올 수 있습니다.
import { useRouter } from "next/router";

// import * as S from "./BoardWrite.styles"; //export 한방에 다 가져오기
// S.BlueButton; //export 한방에 다 가져오기
// S.RedInput; //export 한방에 다 가져오기

//container.js
export default function BoardWrite(props) {
  const router = useRouter();

  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const [updateBoard] = useMutation(UPDATE_BOARD);

  // useMutation은 그냥 사용 할 수 없으므로 import 해야합니다.
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables가 $ 역할을 합니다.
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    console.log(result.data.createBoard.number);
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myVariables = {
      number: Number(router.query.number),
    };
    // 위와 동일 코드 myVariables.number = Number(router.query.number);
    // myVariables = {number : Number(router.query.number)}

    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;
    // 위와 동일
    // if (writer !== "")
    //   myVariables.writer= writer;
    //
    // if (title !== "") {
    //   myVariables.title = title;
    // }
    // if (contents !== "") {
    //   myVariables.title = contents;
    // }

    const result = await updateBoard({
      variables: myVariables,
    });

    console.log(result);

    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <div>
      <div>$$$$$$$$ 여기는 컨테이너입니다 $$$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
        data={props.data} //undefined 이거나(등록하기페이지), date이거나(수정하기페이지) 둘 중 하나!
      />
      <div>$$$$$$$$ 여기는 컨테이너입니다 $$$$$$$$$</div>
    </div>
  );
}
