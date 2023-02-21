import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
// import { Modal } from "antd";
import { wrapFormAcync } from "../../../src/commons/libraries/asyncFunc";

// import ReactQuill from "react-quill";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
// ssr (서버사이드) 에서는 import하지 않습니다.

export default function WebEditorPage(): JSX.Element {
  // ReactiQuill 만든 사람들이 만든 onChang 이므로 event 안들어옴
  const onChangeContents = (value: string): void => {
    console.log(value);
  };

  // useEffect(() => {
  //   async function aaa(): Promise<void> {
  //     const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
  //     // 등록하기 버튼을 누르면 antd에서 Modal을 다운 받습니다. 클릭했을때 조금 늦습니다. (처음부터 불필요하게 다운받지 않습니다.)
  //     Modal.success({ content: "게시글 등록에 성공하였습니다." });
  //   }
  //   void aaa();
  // }, []);

  const onClickSubmit = async (): Promise<void> => {
    // event.preventDefault(); => 아래의 wrapFormAcync가 대신 기능을 해줍니다.
    // onSubmit의 기본기능 (버튼클릭시 페이지 이동) 을 막는 기능입니다.

    const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
    // 등록하기 버튼을 누르면 antd에서 Modal을 다운 받습니다. 클릭했을때 조금 늦습니다. (처음부터 불필요하게 다운받지 않습니다.)
    Modal.success({ content: "게시글 등록에 성공하였습니다." });
  };

  return (
    <form onSubmit={wrapFormAcync(onClickSubmit)}>
      작성자 : <input type="text" /> <br />
      비밀번호 : <input type="password" />
      <br />
      제목 : <input type="text" />
      <br />
      내용 :
      <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}

// yarn add react-quill
