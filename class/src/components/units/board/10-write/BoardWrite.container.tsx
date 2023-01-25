import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter"; //export default로 한개만 가져올 수 있습니다.
import { useRouter } from "next/router";
import { IMyVariables, IBoardWriteProps } from "./BoardWrite.types";

// import * as S from "./BoardWrite.styles"; //export 한방에 다 가져오기
// S.BlueButton; //export 한방에 다 가져오기
// S.RedInput; //export 한방에 다 가져오기

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

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
    router.push(
      `/section10/10-02-typescript-boards/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const myVariables: IMyVariables = { number: Number(router.query.number) };
    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    const result = await updateBoard({
      variables: myVariables,
    });

    console.log(result);

    router.push(
      `/section10/10-02-typescript-boards/${result.data.updateBoard.number}`
    );
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
