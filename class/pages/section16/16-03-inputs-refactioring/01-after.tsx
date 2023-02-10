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
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  // const [writer, setWriter] = useState("");
  // const [title, setTitle] = useState("");
  // const [content, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // writer:inputs.writer,
        // title:inputs.title,
        // contents:inputs.contents

        ...inputs,
      },
    });
    console.log(result);
  };

  const onChangeInputs = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // const onChangeWriter = (event) => {
  //   setInputs({
  //     ...inputs,
  //     // writer: inputs.writer,
  //     // title: inputs.title,
  //     // contents: inputs.contents,

  //     // writer: event.target.value, // 마지막 key의 value로 가져옵니다.
  //     [event.target.id]: event.target.value,
  //     // event.target.id 안의 값을 key로 해줘 => 대괄호 (객체의 key에 들어가는 대괄호는 배열이 아닙니다.)
  //   });
  //   // 변경 전 : setWriter(event.target.value);
  // };
  // const onChangeTitle = (event) => {
  //   setInputs({
  //     ...inputs,
  //     // writer: inputs.writer,
  //     // title: inputs.title,
  //     // contents: inputs.contents,

  //     // title: event.target.value,
  //     [event.target.id]: event.target.value,
  //   });
  //   // 변경 전 : setTitle(event.target.value);
  // };
  // const onChangeContents = (event) => {
  //   setInputs({
  //     ...inputs,
  //     // writer: inputs.writer,
  //     // title: inputs.title,
  //     // contents: inputs.contents,

  //     // contents: event.target.value,
  //     [event.target.id]: event.target.value,
  //   });
  //   // 변경 전 : setContents(event.target.value);
  // };

  return (
    <div>
      작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
      제목 : <input type="text" id="title" onChange={onChangeInputs} />
      내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}> GRAPHQL-API 요청하기</button>;
    </div>
  );
}
