import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $content: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [content, setContents] = useState();

  const [나의함수] = useMutation(나의그래프큐엘셋팅); // useMutation은 그냥 사용 할 수 없으므로 import 해야합니다.

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables가 $ 역할을 합니다.
        writer: writer,
        title: title,
        contents: content,
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

  return (
    <div>
      작성자 : <input type="text" onChange={onChangeWriter} />
      {/* 변경될때 실행되어야 하므로 onChange 사용 onChange에 값이 들어오면 onChangeWriter에 event가 들어갑니다.*/}
      제목 : <input type="text" onChange={onChangeTitle} />
      내용 : <input type="text" onChange={onChangeContents} />
      <button onClick={onClickSubmit}> GRAPHQL-API 요청하기</button>;
    </div>
  );
}
