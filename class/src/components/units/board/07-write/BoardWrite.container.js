import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅, 골라서가져오기 } from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter"; //export default로 한개만 가져올 수 있습니다.

export default function BoardWrite(props) {
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    // 변경 전 if (writer && title && contents) {
    if (event.target.value && title && contents) {
      setIsActive(true);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setIsActive(true);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setIsActive(true);
    }
  };
  // setState는 함수가 끝나고 일괄적으로 업데이트합니다.
  // 그래서 &&를 검증하고 적용하기 때문에 한글자씩만 입력하면 버튼색상이 변경되지 않습니다.
  // 그래서 위 코드처럼 수정하여 개선할 수 있습니다.

  return (
    <div>
      <div>$$$$$$$$ 여기는 컨테이너입니다 $$$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isActive={isActive}
      />
      <div>$$$$$$$$ 여기는 컨테이너입니다 $$$$$$$$$</div>
    </div>
  );
}
