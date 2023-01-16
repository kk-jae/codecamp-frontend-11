import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅, 골라서가져오기 } from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter"; //export default로 한개만 가져올 수 있습니다.
// import Sdsadfwefsdf from "./BoardWrite.presenter";                 //export default로 이름 바꿔서 가져오기
// import Sdsadfwefsdf, { apple } from "./BoardWrite.presenter";      //export default와 export 함께 가져오기
//export default는 어차피 하나만 가져올 수 있으니, 경로가 있으면 BoardWriteUI 는 일치하지 않아도 무관합니다.

// import * as S from "./BoardWrite.styles"; //export 한방에 다 가져오기
// S.BlueButton; //export 한방에 다 가져오기
// S.RedInput; //export 한방에 다 가져오기

//container.js
export default function BoardWrite(props) {
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

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
  //container.js

  //presenter.js의 부모입니다. (props 전달 가능)
  return (
    <div>
      <div>$$$$$$$$ 여기는 컨테이너입니다 $$$$$$$$$</div>
      <BoardWriteUI
        aaa={onClickSubmit}
        bbb={onChangeWriter}
        ccc={onChangeTitle}
        ddd={onChangeContents}
      />
      <div>$$$$$$$$ 여기는 컨테이너입니다 $$$$$$$$$</div>
    </div>
  );
}
